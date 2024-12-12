import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic } from 'lucide-react';

const PodcastFeed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="podcast" className="py-20 bg-gradient-to-b from-black to-purple-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Mic className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Mystic Wisdom Podcast
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for weekly episodes exploring spirituality, astrology, and personal growth
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
          >
            <iframe
              src="https://open.spotify.com/embed/show/0qlFqSoL5N8khCBZHa8Rw7?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-8"
          >
            <motion.a
              href="https://open.spotify.com/show/0qlFqSoL5N8khCBZHa8Rw7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Listen on Spotify
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastFeed;