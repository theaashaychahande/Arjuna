
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WhatsAppMockup from './WhatsAppMockup';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -120]);
  const y2 = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const horizonScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const handleWhatsAppClick = () => {
    const professionalMessage = "Greetings Team Arjuna, I have just visited your platform. I am looking for professional assistance with my GST compliance and would like to understand how your assistant can help me stay secure. I have a few specific queries. Looking forward to your guidance.";
    const encodedMessage = encodeURIComponent(professionalMessage);
    window.open(`https://wa.me/917507666700?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-[100vh] md:min-h-[120vh] flex flex-col items-center justify-start pt-32 md:pt-48 overflow-hidden bg-[#050505]">
      {/* 1. Base Text Grid - Keep it clean */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 -z-30 pointer-events-none" />

      {/* 2. Hero Content Container */}
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity }}
          className="flex flex-col items-center mb-6 md:mb-10"
        >
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-10 text-[10px] md:text-[12px] font-black tracking-[0.4em] text-purple-300 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
            INTELLIGENT COMPLIANCE
          </span>
          <h1 className="text-4xl md:text-[5rem] lg:text-[7.2rem] font-black tracking-tighter leading-[1.1] md:leading-[1.05] mb-8 md:mb-12 max-w-6xl text-reveal">
            CA in your pocket <br /> <span className="text-purple-400">via WhatsApp</span>
          </h1>
          <p className="text-base md:text-xl lg:text-3xl text-white/40 mb-10 md:mb-14 max-w-4xl mx-auto font-light leading-relaxed">
            Send GST notice photo → Get Hindi voice explanation <br className="hidden md:block" /> → Ready reply letter in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 mb-16 md:mb-24 z-30 w-full md:w-auto"
        >
          <button 
            onClick={onGetStarted}
            className="px-8 py-5 md:px-14 md:py-7 bg-white text-black text-[12px] md:text-[14px] font-black uppercase tracking-widest rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:bg-gray-200 hover:scale-105 transition-all active:scale-95"
          >
            Try Free Demo
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="px-8 py-5 md:px-14 md:py-7 bg-purple-600 text-white text-[12px] md:text-[14px] font-black uppercase tracking-widest rounded-2xl shadow-[0_0_50px_rgba(147,73,205,0.3)] hover:bg-purple-500 hover:scale-105 transition-all flex items-center justify-center gap-4 active:scale-95"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.414-8.412" />
            </svg>
            WhatsApp Now
          </button>
        </motion.div>

        {/* 3. THE "BOLT" HORIZON STAGE AREA */}
        <div className="w-full max-w-[1400px] relative flex flex-col items-center mt-[-40px]">
          
          {/* THE CURVED HORIZON EFFECT - MOVED TO START IMMEDIATELY BELOW CTAs */}
          <motion.div 
            style={{ scale: horizonScale }}
            className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[400vw] md:w-[300vw] h-[600px] md:h-[1000px] pointer-events-none"
          >
            {/* The Rim Glow Layers */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px] z-30" />
            <div className="absolute top-0 inset-x-0 h-[6px] md:h-[8px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[5px] md:blur-[6px] z-20" />
            <div className="absolute top-0 inset-x-0 h-[50px] md:h-[80px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent blur-[40px] md:blur-[60px] z-10" />
            
            {/* The Main Surface Mask */}
            <div className="absolute inset-0 bg-[#050505] rounded-[50%_50%_0_0] border-t border-white/10 shadow-[inset_0_50px_150px_rgba(147,73,205,0.15)]" />
          </motion.div>
          
          {/* Product and Cards - Layered on the stage */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 relative z-30 pt-16 md:pt-32">
            <motion.div
              style={{ y: y1 }}
              className="hidden lg:block w-80 glass-card p-10 rounded-[2.8rem] text-left self-start mt-24 shadow-2xl border-white/10"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-[13px] font-black uppercase tracking-widest mb-4 text-white/80">Instant AI</h4>
              <p className="text-[13px] text-white/30 leading-relaxed font-light">Analysis in 30 seconds. Built specifically for Indian traders.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-40 scale-90 md:scale-110"
            >
              {/* Soft reflection to ground the phone on the new horizon */}
              <div className="absolute bottom-[-100px] md:bottom-[-140px] left-1/2 -translate-x-1/2 w-[120%] h-40 md:h-60 bg-purple-500/10 blur-[80px] md:blur-[100px] rounded-full opacity-40 pointer-events-none" />
              <WhatsAppMockup />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="hidden lg:block w-80 glass-card p-10 rounded-[2.8rem] text-left self-end mb-24 shadow-2xl border-white/10"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-[13px] font-black uppercase tracking-widest mb-4 text-white/80">CA Verified</h4>
              <p className="text-[13px] text-white/30 leading-relaxed font-light">Legal experts on demand. We handle the paperwork, you handle the shop.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
