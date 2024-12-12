import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Calendar } from 'lucide-react';
import { calculateStarseedAlignments } from '../utils/natalChart';

interface StarSeedResult {
  starseed: string;
  alignmentType: string;
  strength: number;
  description?: string;
}

const NatalChartCalculator = () => {
  const [results, setResults] = useState<StarSeedResult[]>([]);
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally call an astrology API to get planet positions
    // For demo, we'll use sample data
    const samplePlanetPositions = [
      { planet: 'Sun', degree: 15, sign: 'Aries' },
      { planet: 'Moon', degree: 23, sign: 'Libra' },
      { planet: 'Mercury', degree: 14, sign: 'Cancer' },
      { planet: 'Venus', degree: 7, sign: 'Virgo' },
      { planet: 'Mars', degree: 28, sign: 'Gemini' },
      { planet: 'Jupiter', degree: 9, sign: 'Sagittarius' },
      { planet: 'Saturn', degree: 17, sign: 'Aries' },
      { planet: 'Uranus', degree: 24, sign: 'Taurus' },
      { planet: 'Neptune', degree: 26, sign: 'Leo' },
      { planet: 'Pluto', degree: 29, sign: 'Scorpio' }
    ];

    const starseedResults = calculateStarseedAlignments(samplePlanetPositions);
    setResults(starseedResults);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Star className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Discover Your Starseed Origins
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enter your birth details to reveal your cosmic connections and starseed alignments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Birth Date</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Birth Time (if known)</label>
                  <input
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Birth Place</label>
                <input
                  type="text"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  placeholder="City, Country"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Calculate Your Starseed Chart
              </motion.button>
            </form>

            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-8 space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Your Starseed Alignments</h3>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-white/5 border border-purple-500/30"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold text-white">{result.starseed}</h4>
                        <span className="text-purple-400">
                          Strength: {result.strength}/5
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {result.alignmentType.charAt(0).toUpperCase() + result.alignmentType.slice(1)} alignment: {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NatalChartCalculator;