import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Star className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Unika
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://i.ibb.co/z4KhYW7/Photo-Apr-07-2024-3-50-42-PM.jpg"
                alt="Unika Nicole"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  Astrologer & Psychic-Medium
                </h3>
                <p className="text-gray-300">
                  Unika, owner of The Starseed Faction, is a devoted astrologer, astronomer, holistic practitioner, and Psychic-Medium. Known as the alias of Andromedan Babe, she is host of podcast TSF Alien Episodes, and a vocal healer through both 'new age' and indigenous music.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  Holistic Approach
                </h3>
                <p className="text-gray-300">
                  She is, also, an evolving yogini with an emphasis upon the profound dynamics of Pranayama. Her background in art, musical harmonics, metaphysics, and Psychology intertwine for a very unique approach within all of her practices.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Vision & Mission
                </h3>
                <p className="text-gray-300">
                  Unika is a healer, and mystic, who believes in the power of a Conscious community. Her goal is to deliver a sense of belonging, support, and acceptance to those that have devoted themselves to an unorthodox path, like herself. She breeds empowerment through all of her spiritual works, with a grand vision for all of humanity.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;