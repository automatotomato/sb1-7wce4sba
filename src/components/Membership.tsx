import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Crown, Sparkles } from 'lucide-react';

const tiers = [
  {
    icon: <Star className="w-8 h-8" />,
    name: 'Starseed',
    price: 19,
    description: 'Perfect for beginning your spiritual journey',
    features: [
      'Monthly natal chart updates',
      'Basic meditation guides',
      'Community forum access',
      'Weekly horoscopes',
    ],
  },
  {
    icon: <Crown className="w-8 h-8" />,
    name: 'Mystic',
    price: 49,
    description: 'For dedicated spiritual practitioners',
    features: [
      'Everything in Starseed',
      'Monthly 1:1 coaching session',
      'Exclusive workshops',
      'Priority booking',
      'Custom meditation tracks',
    ],
    popular: true,
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: 'Lightworker',
    price: 99,
    description: 'Complete spiritual transformation',
    features: [
      'Everything in Mystic',
      'Weekly 1:1 coaching',
      'Personal ritual crafting',
      'Energy healing sessions',
      'Private Discord channel',
      'Custom crystal kit',
    ],
  },
];

const Membership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="membership" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Join Our Sacred Circle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the membership tier that resonates with your spiritual journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                tier.popular
                  ? 'bg-gradient-to-b from-purple-900/50 to-black border-2 border-purple-500'
                  : 'bg-white/5 border border-purple-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-purple-400 mb-6">{tier.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 rounded-full font-semibold ${
                  tier.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {tier.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;