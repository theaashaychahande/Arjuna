
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Headphones, FileText, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Send notice photo on WhatsApp",
    description: "Just click a clear picture of the GST notice you received and send it to our WhatsApp number.",
    image: "https://picsum.photos/id/160/800/800"
  },
  {
    id: 2,
    icon: <Headphones className="w-6 h-6 md:w-8 md:h-8" />,
    title: "AI explains in Hindi voice note",
    description: "Within seconds, get a voice note explaining the notice in simple Hindi. No legal jargon.",
    image: "https://picsum.photos/id/1/800/800"
  },
  {
    id: 3,
    icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Get ready-to-send reply letter",
    description: "Receive a professional, PDF-formatted reply ready for submission to the GST department.",
    image: "https://picsum.photos/id/20/800/800"
  },
  {
    id: 4,
    icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Pay just ₹50-₹99 per notice",
    description: "Only pay when you're satisfied. Our micro-pricing model is built for small businesses.",
    image: "https://picsum.photos/id/26/800/800"
  }
];

const SolutionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solution" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-10 tracking-tight text-reveal"
          >
            How Arjuna works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed"
          >
            4 simple steps to complete GST compliance <br className="hidden md:block" /> without leaving your shop floor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 border ${
                  activeStep === idx 
                    ? 'bg-purple-600/15 border-purple-500/40 shadow-2xl scale-[1.02] md:scale-[1.03]' 
                    : 'bg-transparent border-transparent opacity-30 hover:opacity-50'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <div className={`p-3 md:p-5 rounded-2xl ${activeStep === idx ? 'bg-purple-600 text-white shadow-[0_0_30px_#9349CD]' : 'bg-white/5 text-white/50'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold mb-1">Step {step.id}: {step.title}</h3>
                    <p className="text-[12px] md:text-[15px] text-white/30 line-clamp-1 font-light">{step.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 h-[450px] md:h-[650px] relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] glass-card border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center items-center text-center"
              >
                <div className="relative w-full max-w-[320px] md:max-w-[420px] mb-6 md:mb-12">
                  <div className="absolute inset-0 bg-purple-500/10 blur-[60px] md:blur-[80px] rounded-full" />
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title}
                    className="w-full h-48 md:h-80 object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl grayscale opacity-70 border border-white/10 relative z-10"
                  />
                </div>
                <h4 className="text-2xl md:text-4xl font-black mb-4 md:mb-8 tracking-tight">{steps[activeStep].title}</h4>
                <p className="text-base md:text-xl text-white/40 max-w-lg font-light leading-relaxed">{steps[activeStep].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFlow;
