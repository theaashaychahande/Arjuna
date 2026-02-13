
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionFlow from './components/SolutionFlow';
import PricingSection from './components/PricingSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import GetStartedModal from './components/GetStartedModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500/30">
      <Navbar onGetStarted={openModal} />
      <main>
        <Hero onGetStarted={openModal} />
        <ProblemSection />
        <SolutionFlow />
        <PricingSection />
        <TrustSection />
      </main>
      <Footer />
      
      <GetStartedModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
