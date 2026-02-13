
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Users } from 'lucide-react';

const plans = [
  {
    name: "Starter AI",
    displayPrice: "₹50",
    rangeText: "Up to ₹99 per notice",
    period: "per notice",
    description: "AI-powered analysis for simple compliance checks.",
    footer: "Based on complexity",
    icon: <Zap className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />,
    features: [
      "Instant AI Notice Analysis",
      "Hindi Voice Explanation",
      "Draft Reply Letter (Text)",
      "24/7 WhatsApp Access"
    ],
    highlight: false
  },
  {
    name: "Premium Plus",
    displayPrice: "₹250",
    rangeText: "Up to ₹399 per month",
    period: "per month",
    description: "For active shops needing constant protection.",
    footer: "Full access to all AI tools",
    icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />,
    features: [
      "Unlimited Notice Analysis",
      "Unlimited Voice Explanations",
      "Unlimited PDF Generations",
      "Priority AI Processing",
      "Monthly Health Reports"
    ],
    highlight: true
  },
  {
    name: "Expert CA",
    displayPrice: "₹350",
    rangeText: "Up to ₹399 per notice",
    period: "per notice",
    description: "Personalized advice from real legal experts.",
    footer: "Direct consultation with CA",
    icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />,
    features: [
      "Real Human CA Review",
      "Personalized Legal Strategy",
      "Custom Verified Response",
      "1-on-1 WhatsApp Support",
      "Legal Representation"
    ],
    highlight: false
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tight"
          >
            Executive Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Flexible tiers designed for every Indian shopkeeper. <br />
            An initiative by <span className="text-white/60 font-bold">Seneca</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1400px] mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className={`flex flex-col p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] transition-all duration-500 relative overflow-hidden ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-purple-600/20 to-transparent pricing-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] md:scale-105 z-10' 
                  : 'glass-card border-white/5 shadow-2xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 px-6 py-2 md:px-8 md:py-3 bg-purple-600 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-bl-[1.5rem] md:rounded-bl-[2rem]">
                  Popular Choice
                </div>
              )}

              <div className="mb-8 md:mb-12">
                <div className="mb-6 md:mb-8">{plan.icon}</div>
                <h3 className="text-[11px] md:text-[13px] font-black text-white/50 uppercase tracking-[0.4em] mb-6 md:mb-8">{plan.name}</h3>
                
                <div className="flex flex-col mb-6 md:mb-8">
                  <div className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-4xl md:text-6xl font-black tracking-tighter">{plan.displayPrice}</span>
                    <span className="text-white/30 text-[11px] md:text-[13px] font-bold uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <div className="text-[14px] md:text-[16px] font-bold text-purple-400 mt-2 md:mt-3">{plan.rangeText}</div>
                </div>

                <p className="text-white/40 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-light">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 md:space-y-6 mb-10 md:mb-12">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 md:gap-5 text-[14px] md:text-[15px] text-white/60">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="font-light leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 md:py-7 rounded-[1.5rem] md:rounded-[2rem] font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] transition-all active:scale-[0.97] ${
                plan.highlight 
                  ? 'bg-white text-black hover:bg-gray-200 shadow-2xl' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
