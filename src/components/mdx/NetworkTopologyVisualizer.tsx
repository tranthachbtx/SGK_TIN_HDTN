"use client";

import React, { useState } from "react";
import { Network, Wifi, Server, Laptop, Smartphone, Globe, ArrowRight, Play, RefreshCw, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function NetworkTopologyVisualizer() {
  const [selectedDestination, setSelectedDestination] = useState<"local" | "internet">("local");
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const startSimulation = (dest: "local" | "internet") => {
    setSelectedDestination(dest);
    setStep(1);
    setIsPlaying(true);

    const maxSteps = dest === "local" ? 3 : 5;
    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      if (current > maxSteps) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setStep(current);
      }
    }, 1200);
  };

  const reset = () => {
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-200 dark:border-sky-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
            <Network className="w-5 h-5 text-cyan-200" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">Mô phỏng Luồng dữ liệu qua Thiết bị mạng (Packet Flow Simulator)</h4>
            <p className="text-xs text-cyan-100">Khám phá vai trò của Switch, Router, Modem và Điểm truy cập Access Point</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => startSimulation("local")}
            disabled={isPlaying}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] ${
              selectedDestination === "local" && step > 0
                ? "bg-white text-teal-700 shadow-md"
                : "bg-white/20 hover:bg-white/30 text-white"
            } disabled:opacity-50`}
          >
            <Play className="w-3.5 h-3.5" /> Gửi tới PC nội bộ (LAN)
          </button>
          <button
            onClick={() => startSimulation("internet")}
            disabled={isPlaying}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] ${
              selectedDestination === "internet" && step > 0
                ? "bg-white text-blue-700 shadow-md"
                : "bg-white/20 hover:bg-white/30 text-white"
            } disabled:opacity-50`}
          >
            <Globe className="w-3.5 h-3.5" /> Gửi ra Internet (Web Server)
          </button>
          {step > 0 && (
            <button
              onClick={reset}
              className="p-2 bg-black/20 hover:bg-black/30 rounded-xl text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Đặt lại"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Topology Diagram */}
      <div className="p-5 sm:p-6 space-y-6">
        <div className="relative bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
          {/* Status Indicator */}
          <div className="mb-4 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-500 dark:text-slate-400">
              Trạng thái gói tin (Data Packet):
            </span>
            <span className={`px-2.5 py-1 rounded-full font-bold ${
              step === 0
                ? "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                : isPlaying
                ? "bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 animate-pulse"
                : "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
            }`}>
              {step === 0 && "Sẵn sàng truyền dữ liệu"}
              {step === 1 && "Bước 1: PC 1 đóng gói tin và gửi tới Switch"}
              {step === 2 && (selectedDestination === "local" ? "Bước 2: Switch tra bảng MAC và chuyển tiếp tới PC 2" : "Bước 2: Switch nhận thấy IP ngoài mạng LAN, gửi lên Router")}
              {step === 3 && (selectedDestination === "local" ? "Bước 3: PC 2 nhận gói tin thành công!" : "Bước 3: Router định tuyến (NAT) và chuyển tới Modem")}
              {step === 4 && "Bước 4: Modem điều chế tín hiệu và phát qua sợi quang Internet"}
              {step === 5 && "Bước 5: Server Web quốc tế nhận được yêu cầu!"}
            </span>
          </div>

          {/* Network Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
            {/* Node 1: Sender PC 1 */}
            <div className={`p-4 rounded-xl border transition-all text-center space-y-1 relative ${
              step === 1
                ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950/40 ring-2 ring-cyan-400 scale-105 shadow-lg"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            }`}>
              <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs block text-slate-800 dark:text-slate-200">PC Gửi (PC 1)</span>
              <code className="text-[11px] text-slate-500 block">192.168.1.10</code>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">Nguồn dữ liệu</span>
            </div>

            {/* Node 2: Switch */}
            <div className={`p-4 rounded-xl border transition-all text-center space-y-1 relative ${
              step === 2
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40 ring-2 ring-blue-400 scale-105 shadow-lg"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            }`}>
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold text-xs block text-slate-800 dark:text-slate-200">Bộ chuyển mạch (Switch)</span>
              <span className="text-[10px] text-slate-500 block">Bảng địa chỉ MAC (Layer 2)</span>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold block">Chuyển tiếp nội bộ LAN</span>
            </div>

            {/* Branching based on Local or Internet */}
            {selectedDestination === "local" ? (
              /* Local target: PC 2 */
              <div className={`p-4 rounded-xl border transition-all text-center space-y-1 md:col-span-2 relative ${
                step >= 3
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-400 scale-105 shadow-lg"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              }`}>
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
                  <Laptop className="w-5 h-5" />
                </div>
                <span className="font-bold text-xs block text-slate-800 dark:text-slate-200">PC Nhận (PC 2 - Cùng LAN)</span>
                <code className="text-[11px] text-slate-500 block">192.168.1.15</code>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                  {step >= 3 ? "✓ Đã nhận thành công gói tin!" : "Chờ nhận dữ liệu"}
                </span>
              </div>
            ) : (
              <>
                {/* Node 3: Router */}
                <div className={`p-4 rounded-xl border transition-all text-center space-y-1 relative ${
                  step === 3
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 ring-2 ring-indigo-400 scale-105 shadow-lg"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                }`}>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xs block text-slate-800 dark:text-slate-200">Bộ định tuyến (Router)</span>
                  <code className="text-[11px] text-slate-500 block">Gateway: 192.168.1.1</code>
                  <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold block">Định tuyến IP (Layer 3)</span>
                </div>

                {/* Node 4: Modem & Web Server */}
                <div className={`p-4 rounded-xl border transition-all text-center space-y-1 relative ${
                  step >= 4
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950/40 ring-2 ring-purple-400 scale-105 shadow-lg"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                }`}>
                  <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xs block text-slate-800 dark:text-slate-200">Modem & Web Server</span>
                  <span className="text-[10px] text-slate-500 block">Quang/Điện → WAN Internet</span>
                  <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold block">
                    {step >= 5 ? "✓ Đã tới Server Google/Youtube" : "Cổng kết nối Internet toàn cầu"}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Device Knowledge Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
            <span className="font-bold text-blue-600 dark:text-blue-400 block">1. Switch (Bộ chuyển mạch)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Chỉ chuyển gói tin đích danh đến đúng cổng của thiết bị nhận dựa vào <strong>bảng địa chỉ MAC</strong>. Không bị nghẽn hay xung đột dữ liệu như Hub.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">2. Router (Bộ định tuyến)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Kết nối hai hay nhiều mạng khác nhau (mạng LAN gia đình với mạng WAN bên ngoài). Tìm đường đi ngắn nhất dựa trên <strong>địa chỉ IP</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
            <span className="font-bold text-purple-600 dark:text-purple-400 block">3. Modem (Điều chế tín hiệu)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Chuyển đổi tín hiệu tương tự (quang học/sóng vô tuyến từ nhà mạng ISP) sang tín hiệu số số hóa (Digital) mà máy tính hiểu được.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
            <span className="font-bold text-teal-600 dark:text-teal-400 block">4. Access Point (Điểm truy cập)</span>
            <p className="text-slate-600 dark:text-slate-400">
              Phát sóng Wi-Fi không dây cho điện thoại, laptop kết nối vào mạng cáp có sẵn của Switch/Router trong trường học, gia đình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
