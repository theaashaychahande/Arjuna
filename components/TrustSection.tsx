
import React from 'react';
import { motion } from 'framer-motion';

const TrustSection: React.FC = () => {
  return (
    <section id="accuracy" className="py-20 md:py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black tracking-[0.4em] text-purple-500 uppercase mb-4 md:mb-6 block">The Engine Room</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-16 text-reveal leading-[1.1] md:leading-[1.05] tracking-tight text-center md:text-left">
                Trained on massive <br /> legal datasets
              </h2>
              <div className="space-y-10 md:space-y-12">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter text-white">96.6%</span>
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mt-2 md:mt-3">Accuracy in Logic Parsing</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter text-purple-500">50k+</span>
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mt-2 md:mt-3">Real GST Notices Processed</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter text-white">1.2s</span>
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mt-2 md:mt-3">Reasoning Latency</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] relative border-white/10 overflow-hidden"
          >
            {/* Technical Background Detail */}
            <div className="absolute top-0 right-0 p-8 opacity-5 md:opacity-10">
              <svg className="w-32 h-32 md:w-40 md:h-40 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-[8px] md:text-[9px] font-black text-purple-400 uppercase tracking-widest">System Validation</div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white/90 tracking-tight">AI Precision Benchmark</h4>
              <p className="text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10 text-white/50 italic">
                "Arjuna's core logic has been stress-tested against the most complex GST dispute scenarios. The AI demonstrates a remarkable ability to distinguish between procedural lapses and substantive legal demands, ensuring that generated responses are legally sound defensive strategies."
              </p>
              
              <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] md:text-sm font-black uppercase tracking-widest text-white">Technical Review Board</div>
                  <div className="text-[9px] md:text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em] mt-1">Certified AI Reliability Report</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
