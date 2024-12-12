import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Moon, Sun, Heart } from 'lucide-react';

const services = [
  {
    icon: <Moon className="w-8 h-8" />,
    title: 'Natal Chart Readings',
    description: 'Discover your cosmic blueprint and life path through detailed astrological analysis.',
    price: 149,
    duration: '90 minutes',
    features: ['Detailed birth chart analysis', 'Life path guidance', 'PDF report included'],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: 'Spiritual Coaching',
    description: 'One-on-one guidance to help you navigate your spiritual journey.',
    price: 199,
    duration: '60 minutes',
    features: ['Personalized guidance', 'Action plan creation', 'Follow-up support'],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Energy Healing',
    description: 'Balance and align your energy centers for optimal wellbeing.',
    price: 129,
    duration: '75 minutes',
    features: ['Chakra balancing', 'Aura cleansing', 'Post-session care guide'],
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Meditation Guide',
    description: 'Learn powerful meditation techniques for inner peace and clarity.',
    price: 89,
    duration: '45 minutes',
    features: ['Custom meditation routine', 'Breathing techniques', 'Recorded guidance'],
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Mystical Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our range of spiritual services designed to guide you on your path to enlightenment and self-discovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/50 to-transparent border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all group"
            >
              <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="pt-4 border-t border-purple-500/30">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
                  ${service.price}
                </p>
                <p className="text-sm text-gray-400 mb-4">{service.duration}</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;