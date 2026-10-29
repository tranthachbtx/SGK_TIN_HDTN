"use client";

import React, { useState } from "react";
import { Terminal, Laptop, Network, Play, CheckCircle2, AlertTriangle, XCircle, RefreshCw, FolderPlus } from "lucide-react";

export function LanConfiguratorSimulator() {
  const [ipA, setIpA] = useState("192.168.1.10");
  const [maskA, setMaskA] = useState("255.255.255.0");
  const [ipB, setIpB] = useState("192.168.1.20");
  const [maskB, setMaskB] = useState("255.255.255.0");
  const [pingStatus, setPingStatus] = useState<"idle" | "running" | "success" | "conflict" | "timeout">("idle");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const runPingTest = () => {
    setPingStatus("running");
    setTerminalLogs([
      `C:\\Users\\HocSinh> ping ${ipB}`,
      `Pinging ${ipB} with 32 bytes of data:`
    ]);

    setTimeout(() => {
      // Check IP Conflict
      if (ipA.trim() === ipB.trim()) {
        setPingStatus("conflict");
        setTerminalLogs(prev => [
          ...prev,
          `Error: IP address conflict detected with hardware address on the network.`,
          `Xung đột IP: Hai máy tính trong cùng một mạng LAN không được phép đặt trùng địa chỉ IP!`,
          `Ping statistics for ${ipB}:`,
          `    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)`
        ]);
        return;
      }

      // Check Subnet Match (assuming /24 for simplicity)
      const subnetA = ipA.split(".").slice(0, 3).join(".");
      const subnetB = ipB.split(".").slice(0, 3).join(".");

      if (subnetA === subnetB && maskA === "255.255.255.0" && maskB === "255.255.255.0") {
        setPingStatus("success");
        setTerminalLogs(prev => [
          ...prev,
          `Reply from ${ipB}: bytes=32 time=1ms TTL=128`,
          `Reply from ${ipB}: bytes=32 time=1ms TTL=128`,
          `Reply from ${ipB}: bytes=32 time=1ms TTL=128`,
          `Reply from ${ipB}: bytes=32 time=1ms TTL=128`,
          ``,
          `Ping statistics for ${ipB}:`,
          `    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`,
          `THÀNH CÔNG: Hai máy tính đã thông mạng LAN hoàn toàn!`
        ]);
      } else {
        setPingStatus("timeout");
        setTerminalLogs(prev => [
          ...prev,
          `Request timed out.`,
          `Request timed out.`,
          `Destination host unreachable.`,
          `Request timed out.`,
          ``,
          `Ping statistics for ${ipB}:`,
          `    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)`,
          `THẤT BẠI: Hai máy tính khác dải mạng Subnet (${subnetA}.x vs ${subnetB}.x) nên không thể thông trực tiếp qua Switch nếu không có Router!`
        ]);
      }
    }, 1000);
  };

  const handleReset = () => {
    setIpA("192.168.1.10");
    setIpB("192.168.1.20");
    setMaskA("255.255.255.0");
    setMaskB("255.255.255.0");
    setPingStatus("idle");
    setTerminalLogs([]);
  };

  return (
    <div className="my-8 rounded-2xl border border-sky-200 dark:border-sky-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
            <Terminal className="w-5 h-5 text-emerald-200" />
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">Bộ mô phỏng Cấu hình IP Mạng LAN & Lệnh Ping</h4>
            <p className="text-xs text-emerald-100">Thực hành thiết lập địa chỉ IP tĩnh và kiểm tra thông mạng (Bài 5 Tin học 12)</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 bg-black/20 hover:bg-black/30 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all min-h-[44px]"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Thiết lập lại mẫu
        </button>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Device Config Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PC 1 Config */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 text-sm">
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span>Máy tính A (Học sinh 1)</span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  IPv4 Address (Địa chỉ IP):
                </label>
                <input
                  type="text"
                  value={ipA}
                  onChange={(e) => setIpA(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-sm focus:ring-2 focus:ring-emerald-500 outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Subnet Mask (Mặt nạ mạng):
                </label>
                <input
                  type="text"
                  value={maskA}
                  onChange={(e) => setMaskA(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-sm focus:ring-2 focus:ring-emerald-500 outline-none min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* PC 2 Config */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 text-sm">
              <Laptop className="w-4 h-4 text-cyan-600" />
              <span>Máy tính B (Học sinh 2)</span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  IPv4 Address (Địa chỉ IP):
                </label>
                <input
                  type="text"
                  value={ipB}
                  onChange={(e) => setIpB(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-sm focus:ring-2 focus:ring-cyan-500 outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Subnet Mask (Mặt nạ mạng):
                </label>
                <input
                  type="text"
                  value={maskB}
                  onChange={(e) => setMaskB(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-sm focus:ring-2 focus:ring-cyan-500 outline-none min-h-[44px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            💡 <strong>Mẹo thử nghiệm:</strong> Thử đổi IP của máy B thành <code>192.168.2.20</code> (khác lớp mạng) hoặc <code>192.168.1.10</code> (trùng IP) để quan sát lỗi!
          </p>

          <button
            onClick={runPingTest}
            disabled={pingStatus === "running"}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center gap-2 min-h-[44px] disabled:opacity-50"
          >
            <Play className="w-4 h-4" />
            {pingStatus === "running" ? "Đang gửi gói tin ICMP..." : `Chạy lệnh Ping từ Máy A sang Máy B`}
          </button>
        </div>

        {/* Command Prompt Terminal Output */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs text-slate-200 shadow-2xl">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-[11px] text-slate-400 ml-2">Command Prompt (cmd.exe) - Máy tính A</span>
            </div>
            <span className="text-[10px] text-slate-500">ICMP Echo Request</span>
          </div>

          <div className="p-4 space-y-1 min-h-[140px]">
            {terminalLogs.length === 0 ? (
              <span className="text-slate-500">
                Nhấn nút &quot;Chạy lệnh Ping từ Máy A sang Máy B&quot; ở trên để bắt đầu gửi 4 gói tin kiểm tra kết nối...
              </span>
            ) : (
              terminalLogs.map((log, lIdx) => {
                const isSuccess = log.includes("THÀNH CÔNG");
                const isFail = log.includes("THẤT BẠI") || log.includes("Xung đột");
                return (
                  <div
                    key={lIdx}
                    className={`${
                      isSuccess
                        ? "text-emerald-400 font-bold"
                        : isFail
                        ? "text-rose-400 font-bold"
                        : "text-slate-300"
                    }`}
                  >
                    {log}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
