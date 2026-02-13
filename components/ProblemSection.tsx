
import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center max-w-7xl mx-auto">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 md:mb-12 leading-[1.2] md:leading-[1.1] tracking-tight text-reveal"
            >
              GST notices confuse <br />
              <span className="text-purple-500">90% of shopkeepers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-white/40 mb-12 md:mb-16 font-light leading-relaxed max-w-xl"
            >
              Don't let legal jargon and strict deadlines put your business at risk. 
              We bridge the gap between complex tax laws and your local shop floor.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[
                { value: "₹10k+", label: "Avg Fine", desc: "For simple delay" },
                { value: "7 Days", label: "Max Delay", desc: "Action window" },
                { value: "90%", label: "Stress Rate", desc: "Trader survey" },
                { value: "0 Legal Help", label: "For Micro", desc: "Cost barrier" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-purple-500/30 transition-all group shadow-2xl"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tighter group-hover:text-purple-400 transition-colors">{stat.value}</div>
                  <div className="text-[12px] md:text-[14px] font-black text-purple-400 mb-2 md:mb-3 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-[13px] md:text-[15px] text-white/30 font-light leading-relaxed">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -inset-8 md:-inset-12 bg-purple-500/5 blur-[80px] md:blur-[120px] rounded-[3rem] -z-10" />
            <img 
              src="https://picsum.photos/id/442/1000/1200" 
              alt="Indian shopkeeper" 
              className="w-full max-w-[400px] md:max-w-[480px] aspect-[4/5] object-cover rounded-[3rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] grayscale opacity-60 border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
