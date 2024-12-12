import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This journey has completely transformed my life. I've found my true purpose.",
    author: "Sarah M.",
    role: "Life Coach"
  },
  {
    quote: "The spiritual guidance I received was exactly what I needed at this point in my life.",
    author: "Michael R.",
    role: "Artist"
  },
  {
    quote: "A truly enlightening experience that opened my eyes to new possibilities.",
    author: "Emma L.",
    role: "Entrepreneur"
  }
];

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-900 via-black to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986')] bg-cover bg-center opacity-20" />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-2 h-2 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Discover Your Cosmic Journey
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Embark on a transformative journey through astrology, spirituality, and self-discovery
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('quizzes')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Begin Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 rounded-full border-2 border-purple-500 text-white font-semibold hover:bg-purple-500/20 transition-colors"
            >
              Explore Services
            </motion.button>
          </div>

          {/* Compact Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-purple-500/20">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-sm italic text-gray-300 mb-2">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="text-purple-400 font-semibold">
                    {testimonials[currentTestimonial].author}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </span>
                </div>
              </motion.div>
              <div className="flex justify-center gap-1.5 mt-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-purple-500'
                        : 'bg-purple-500/30 hover:bg-purple-500/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;