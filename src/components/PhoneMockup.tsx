"use client";

import { motion, MotionValue } from "framer-motion";

interface PhoneMockupProps {
  callOpacity: MotionValue<number>;
  smsOpacity: MotionValue<number>;
}

export default function PhoneMockup({ callOpacity, smsOpacity }: PhoneMockupProps) {
  return (
    <div className="relative w-[280px] h-[580px] bg-[#1c1c1e] rounded-[40px] border-[3px] border-[#3a3a3c] shadow-2xl shadow-black/50 overflow-hidden shrink-0">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#1c1c1e] rounded-b-2xl z-20" />

      {/* Status bar */}
      <div className="absolute top-[8px] left-[40px] right-[40px] flex justify-between items-center z-10 px-2">
        <span className="text-[10px] text-white/60 font-medium">2:14</span>
        <div className="flex items-center gap-1">
          <div className="w-[14px] h-[10px] flex items-end gap-[1px]">
            <div className="w-[2px] h-[4px] bg-white/60 rounded-sm" />
            <div className="w-[2px] h-[6px] bg-white/60 rounded-sm" />
            <div className="w-[2px] h-[8px] bg-white/60 rounded-sm" />
            <div className="w-[2px] h-[10px] bg-white/60 rounded-sm" />
          </div>
          <div className="w-[20px] h-[9px] border border-white/60 rounded-sm relative">
            <div className="absolute inset-[1.5px] right-[3px] bg-white/60 rounded-[1px]" />
            <div className="absolute right-[-3px] top-[2px] w-[1.5px] h-[4px] bg-white/60 rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Screen content area */}
      <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-[#000000]">

        {/* === CALL SCREEN === */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-between py-16 px-6"
          style={{ opacity: callOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a4a]/80 via-[#0a0a1a] to-[#0a0a1a]" />

          <div className="relative z-10 flex flex-col items-center gap-3 mt-8">
            <div className="w-20 h-20 rounded-full bg-[#2a3a5a] flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-[#6a8abd]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <p className="text-white/50 text-xs tracking-wider uppercase">Incoming Call</p>
            <h3 className="text-white text-xl font-semibold">Sheriff Dispatch</h3>
            <p className="text-white/40 text-sm">Incoming rotation call</p>
          </div>

          <div className="relative z-10 flex items-center gap-16 mb-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-red-500/90 flex items-center justify-center shadow-lg shadow-red-500/30">
                <svg className="w-7 h-7 text-white rotate-[135deg]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <span className="text-white/50 text-[10px]">Decline</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-14 h-14 rounded-full bg-green-500/90 flex items-center justify-center"
                animate={{ boxShadow: ["0 0 15px rgba(34,197,94,0.3)", "0 0 30px rgba(34,197,94,0.5)", "0 0 15px rgba(34,197,94,0.3)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </motion.div>
              <span className="text-white/50 text-[10px]">Accept</span>
            </div>
          </div>
        </motion.div>

        {/* === SMS SCREEN === */}
        <motion.div
          className="absolute inset-0 flex flex-col bg-[#000000]"
          style={{ opacity: smsOpacity }}
        >
          <div className="pt-14 pb-3 px-4 border-b border-white/10 bg-[#1c1c1e]/80">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#d4a843]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              <div className="flex-1 text-center">
                <p className="text-white text-sm font-semibold">Owl Dispatch</p>
                <p className="text-white/40 text-[10px]">AI Dispatcher</p>
              </div>
              <div className="w-5" />
            </div>
          </div>

          <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
            <div className="flex justify-start">
              <div className="bg-[#2a2a2e] rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                <p className="text-white/90 text-[13px] leading-relaxed font-medium mb-2">New Dispatch</p>
                <div className="space-y-1.5 text-[12px]">
                  <div className="flex gap-2">
                    <span className="text-white/40">Location:</span>
                    <span className="text-white/80">1847 Oak Valley Rd</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/40">Vehicle:</span>
                    <span className="text-white/80">Silver Honda Civic</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/40">Agency:</span>
                    <span className="text-white/80">County Sheriff Dept</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white/40">Notes:</span>
                    <span className="text-white/80">Blocking fire lane</span>
                  </div>
                </div>
                <p className="text-white/30 text-[10px] mt-2">2:14 AM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-[#2a2a2e] rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                <p className="text-white/80 text-[12px]">Reply YES to confirm or NO to pass.</p>
                <p className="text-white/30 text-[10px] mt-1">2:14 AM</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#d4a843] rounded-2xl rounded-br-md px-4 py-2.5">
                <p className="text-[#0a0a0f] text-[13px] font-medium">YES</p>
                <p className="text-[#0a0a0f]/40 text-[10px] mt-0.5">2:15 AM</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-[#2a2a2e] rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                <p className="text-white/80 text-[12px]">Confirmed. Job assigned. Drive safe.</p>
                <p className="text-white/30 text-[10px] mt-1">2:15 AM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/30 rounded-full" />
    </div>
  );
}
