"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Clock, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClassTimerProps {
  initialSeconds?: number;
  label?: string;
  className?: string;
}

export function ClassTimer({
  initialSeconds = 180,
  label = "Đồng hồ thực hiện nhiệm vụ",
  className,
}: ClassTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [hasFinished, setHasFinished] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  // Audio tone generator using Web Audio API
  const playChime = () => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 chord
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          ctx.currentTime + idx * 0.12 + 0.8
        );
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.9);
      });
    } catch {
      // AudioContext policy fallback
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            setHasFinished(true);
            playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, soundEnabled]);

  const toggleRunning = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(initialSeconds);
      setHasFinished(false);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = (newSecs?: number) => {
    setIsRunning(false);
    setHasFinished(false);
    setSecondsLeft(newSecs !== undefined ? newSecs : initialSeconds);
  };

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeFormatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div
      className={cn(
        "my-4 p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-sky-100 dark:border-sky-900/40 shadow-lg shadow-sky-500/5",
        "flex flex-col sm:flex-row items-center justify-between gap-4 select-none",
        hasFinished && "ring-4 ring-rose-400/80 animate-pulse",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-sm",
            isRunning
              ? "bg-sky-500 text-white animate-pulse"
              : hasFinished
              ? "bg-rose-500 text-white"
              : "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"
          )}
        >
          <Clock size={24} />
        </div>
        <div>
          <span className="text-xs uppercase font-black tracking-wider text-slate-400 block">
            {label}
          </span>
          <span
            className={cn(
              "font-mono text-3xl font-black tracking-tight",
              hasFinished
                ? "text-rose-600 dark:text-rose-400"
                : "text-slate-900 dark:text-white"
            )}
          >
            {timeFormatted}
          </span>
        </div>
      </div>

      {/* Preset time buttons & Controls */}
      <div className="flex items-center flex-wrap gap-2 justify-center sm:justify-end">
        <div className="hidden md:flex items-center gap-1.5 mr-2">
          {[
            { label: "1p", val: 60 },
            { label: "3p", val: 180 },
            { label: "5p", val: 300 },
            { label: "8p", val: 480 },
            { label: "10p", val: 600 },
          ].map((preset) => (
            <button
              key={preset.val}
              onClick={() => handleReset(preset.val)}
              className="px-2.5 py-1.5 rounded-xl text-xs font-black bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 dark:bg-slate-800 dark:text-slate-300 transition-colors min-h-[36px]"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <button
          onClick={toggleRunning}
          className={cn(
            "flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl font-black text-sm text-white transition-all shadow-md active:scale-95 min-h-[44px] min-w-[44px]",
            isRunning
              ? "bg-amber-500 hover:bg-amber-600 shadow-amber-500/20"
              : "bg-sky-600 hover:bg-sky-700 shadow-sky-600/20"
          )}
        >
          {isRunning ? (
            <>
              <Pause size={18} />
              <span>Tạm dừng</span>
            </>
          ) : (
            <>
              <Play size={18} className="fill-current" />
              <span>{secondsLeft === 0 ? "Bắt đầu lại" : "Bắt đầu"}</span>
            </>
          )}
        </button>

        <button
          onClick={() => handleReset()}
          className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
          title="Đặt lại thời gian"
        >
          <RotateCcw size={18} />
        </button>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
          title={soundEnabled ? "Tắt âm báo" : "Bật âm báo"}
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>
    </div>
  );
}
