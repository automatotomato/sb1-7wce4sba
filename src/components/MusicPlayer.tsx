import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music } from 'lucide-react';

const MusicPlayer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Music className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Healing Sounds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Experience the power of sacred frequencies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-lg overflow-hidden bg-white/5 border border-purple-500/30"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Cyjh-5GWFc0"
                title="Healing Meditation Music"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-video rounded-lg overflow-hidden bg-white/5 border border-purple-500/30"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Wo8B_dUm4FM"
                title="Sacred Frequencies"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-video rounded-lg overflow-hidden bg-white/5 border border-purple-500/30"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3ES65WRcRyw"
                title="Meditation Music"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;