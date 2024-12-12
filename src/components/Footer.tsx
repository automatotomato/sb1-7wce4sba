import React from 'react';
import { motion } from 'framer-motion';
import { Star, Instagram, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">The Starseed Faction</span>
            </div>
            <p className="text-gray-400 mb-6">
              Guiding you through your cosmic journey with astrology, healing, and spiritual wisdom.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@thestarseedfaction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#quizzes" className="text-gray-400 hover:text-white transition-colors">
                  Quizzes
                </a>
              </li>
              <li>
                <a href="#store" className="text-gray-400 hover:text-white transition-colors">
                  Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#podcast" className="text-gray-400 hover:text-white transition-colors">
                  TSF Alien Episodes
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-white transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Mail className="w-5 h-5" />
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Starseed Faction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;