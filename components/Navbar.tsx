
import React from 'react';

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetStarted }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Increased offset for the larger navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center">
      <div className="max-w-[1400px] w-full flex justify-between items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] px-12 py-5 shadow-2xl">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={scrollToTop}
        >
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-purple-400 transition-colors">
            ARJUNA
          </div>
          <div className="h-6 w-[1px] bg-white/20 mx-1" />
          <div className="text-[11px] font-black tracking-[0.4em] text-purple-400 uppercase">
            By Seneca
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[13px] font-bold uppercase tracking-widest text-white/50">
          <button 
            onClick={() => scrollToSection('problem')}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            Problem
          </button>
          <button 
            onClick={() => scrollToSection('solution')}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            Pricing
          </button>
        </div>

        <div>
          <button 
            onClick={onGetStarted}
            className="bg-white text-black px-10 py-3.5 rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95 shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
