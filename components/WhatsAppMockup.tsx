
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-[#1c1c1e] bg-[#050505] border-[10px] md:border-[12px] rounded-[3rem] md:rounded-[3.5rem] h-[520px] w-[280px] md:h-[720px] md:w-[350px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Titanium Frame Highlights */}
      <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] md:rounded-[2.8rem] pointer-events-none z-30" />
      
      {/* Screen Content */}
      <div className="relative w-full h-full bg-[#0b141a] flex flex-col pt-8 md:pt-10">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-28 h-6 md:h-7 bg-black rounded-full z-40 flex items-center justify-between px-3 md:px-4">
           <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-500/40 rounded-full" />
           <div className="w-1 h-1 bg-white/10 rounded-full" />
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#1f2c34] p-3 md:p-4 flex items-center gap-3 border-b border-white/5">
          <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-[10px] md:text-xs shadow-lg text-white">A</div>
          <div>
            <div className="text-[11px] md:text-[13px] font-bold text-white tracking-tight">Arjuna AI Assistant</div>
            <div className="text-[9px] md:text-[10px] text-green-400 flex items-center gap-1">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-full animate-pulse" />
              Online
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-grow p-3 md:p-4 space-y-4 overflow-y-auto scrollbar-hide">
          {/* Incoming Message (User) */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-end"
          >
            <div className="bg-[#005c4b] p-1.5 rounded-2xl rounded-tr-none text-white text-[11px] md:text-[12px] max-w-[85%] shadow-md">
              <div className="relative group overflow-hidden rounded-xl mb-1.5">
                 <img 
                   src="https://picsum.photos/id/42/400/500" 
                   alt="GST Notice" 
                   className="w-full h-24 md:h-40 object-cover"
                 />
              </div>
              <div className="px-1 py-0.5">Please explain this GST notice in Hindi.</div>
            </div>
          </motion.div>

          {/* Outgoing Message (Arjuna Analysis) */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="bg-[#202c33] p-2 md:p-3 rounded-2xl rounded-tl-none text-white text-[11px] md:text-[12px] max-w-[85%] shadow-md border border-white/5">
              Analyzing notice metadata... 🧠
            </div>
          </motion.div>

          {/* Outgoing Message (Voice Note) */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 4.5, duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="bg-[#202c33] p-2 md:p-3 rounded-2xl rounded-tl-none text-white text-[11px] md:text-[12px] w-[180px] md:w-[220px] shadow-md border border-white/5">
              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="flex-grow">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] md:text-[10px] font-bold text-purple-400">Hindi Audio</span>
                      <span className="text-[8px] md:text-[9px] text-white/40">0:45</span>
                   </div>
                   <div className="h-0.5 md:h-1 bg-white/10 rounded-full relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, delay: 5, repeat: Infinity }}
                        className="absolute h-full bg-purple-500 rounded-full"
                      />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Outgoing Message (PDF) */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 9, duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="bg-[#202c33] p-2 md:p-3 rounded-2xl rounded-tl-none text-white text-[11px] md:text-[12px] flex items-center gap-3 md:gap-4 max-w-[85%] border border-purple-500/20 shadow-xl">
              <div className="bg-red-500/20 p-2 md:p-2.5 rounded-xl">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 16H8V8h4a4 4 0 1 1 0 8zm0-10H8V2h4a4 4 0 1 1 0 8zM8 16v6H2v-6h6z"/></svg>
              </div>
              <div className="truncate">
                <div className="font-bold text-white/90 truncate">GST_Reply.pdf</div>
                <div className="text-[8px] md:text-[10px] text-white/40">Verified Draft</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Footer */}
        <div className="bg-[#1f2c34] p-3 md:p-4 pb-6 md:pb-8 flex items-center gap-2 md:gap-3">
          <div className="flex-grow bg-[#2a3942] rounded-2xl px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[12px] text-white/20 border border-white/5">
            Type message...
          </div>
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 w-24 h-1 bg-white/20 rounded-full left-1/2 -translate-x-1/2" />
      </div>

      {/* Glass Reflection Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent z-40 opacity-50" />
    </div>
  );
};

export default WhatsAppMockup;
