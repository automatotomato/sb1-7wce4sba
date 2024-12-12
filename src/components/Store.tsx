import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    name: 'Crystal Healing Kit',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&h=400',
    rating: 5,
    reviews: 28,
  },
  {
    name: 'Meditation Cushion Set',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&h=400',
    rating: 4.5,
    reviews: 42,
  },
  {
    name: 'Sacred Sage Bundle',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&h=400',
    rating: 5,
    reviews: 36,
  },
  {
    name: 'Astrology Journal',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&h=400',
    rating: 4.8,
    reviews: 54,
  },
];

const Store = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-black to-purple-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Sacred Shop
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our curated collection of spiritual tools and sacred items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/30 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;