
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Mail, ExternalLink } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    location: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<{ message: string; isActivation?: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Use JSON submission for the /ajax/ endpoint - very reliable
      const response = await fetch("https://formsubmit.co/ajax/aashaychahande1717@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.businessName,
          location: formData.location,
          contact: formData.contact,
          message: formData.message,
          _subject: `🚀 New Arjuna Inquiry: ${formData.businessName}`,
          _captcha: "false",
          _template: "table"
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', businessName: '', location: '', contact: '', message: '' });
      } else {
        // FormSubmit returns specific errors if email isn't verified
        if (response.status === 404 || result.message?.toLowerCase().includes("activate")) {
          setError({ 
            message: "Action Required: You need to activate your email with our delivery service.",
            isActivation: true 
          });
        } else {
          throw new Error(result.message || "Submission failed");
        }
      }
    } catch (err) {
      setError({ 
        message: "Delivery failed. This usually happens if the target email is not activated yet."
      });
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg glass-card p-8 md:p-12 rounded-[3rem] shadow-[0_0_100px_rgba(147,73,205,0.15)] overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/40"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">Sent Successfully</h3>
                <p className="text-white/40 mb-8 max-w-xs mx-auto">
                  The inquiry has been dispatched to the Arjuna support desk.
                </p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-black mb-2 tracking-tight">Get Started</h3>
                  <p className="text-white/40 font-light">Enter your business details below.</p>
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-5 rounded-2xl flex flex-col gap-3 text-xs leading-relaxed ${
                      error.isActivation ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {error.isActivation ? <Mail className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      <span className="font-bold">{error.message}</span>
                    </div>
                    {error.isActivation && (
                      <div className="pl-7 space-y-2">
                        <p>1. Check <b>aashaychahande1717@gmail.com</b></p>
                        <p>2. Look for an email from "FormSubmit"</p>
                        <p>3. Click the <b>Activate</b> button to start receiving inquiries.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-4">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/10"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-4">Business Name</label>
                        <input
                          required
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="RK Grocery Store"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-4">City</label>
                        <input
                          required
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Delhi"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/10"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-4">Contact Info</label>
                        <input
                          required
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="Phone or Email"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-4">Message</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="I have a question about..."
                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/10 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-white text-black py-5 rounded-[1.5rem] font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] pt-4">
                    Enterprise SSL Secure Submission
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;
