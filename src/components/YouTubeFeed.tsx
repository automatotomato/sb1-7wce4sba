import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Youtube } from 'lucide-react';

const YouTubeFeed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-purple-900 to-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Youtube className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Latest Videos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our collection of spiritual guidance videos and meditations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-purple-500/30"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/uegxH4DuQTI"
              title="Spiritual Guidance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-purple-500/30"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/6Nwv3LcbBLk"
              title="Meditation Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-purple-500/30"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2pt3krvh3bk"
              title="Spiritual Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@thestarseedfaction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            Visit our YouTube channel
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeFeed;