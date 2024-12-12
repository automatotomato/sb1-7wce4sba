import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Mail, Sparkles } from 'lucide-react';
import useEmailPopup from '../../hooks/useEmailPopup';

const EmailPopup = () => {
  const { isOpen, closePopup, handleSubmit } = useEmailPopup();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={closePopup}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-md z-50"
          >
            <div className="relative p-6 bg-gradient-to-b from-purple-900 to-black rounded-2xl border border-purple-500/30 shadow-2xl">
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <Star className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Join Our Cosmic Community
                </h2>
                <p className="text-sm text-gray-300">
                  Unlock your spiritual journey with exclusive benefits:
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Star className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>10% off your first personalized reading</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Weekly cosmic insights and guidance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Early access to new spiritual workshops</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-sm"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
                >
                  Unlock Your Journey
                </motion.button>
              </form>

              <p className="text-center text-gray-400 text-xs mt-4">
                Join 5,000+ spiritual seekers on their path to enlightenment
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EmailPopup;