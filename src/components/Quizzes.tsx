import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Moon, Sun } from 'lucide-react';
import NatalChartQuiz from './quizzes/NatalChartQuiz';
import MeditationQuiz from './quizzes/MeditationQuiz';

const quizzes = [
  {
    icon: <Moon className="w-12 h-12" />,
    title: 'Natal Chart Reading',
    description: 'Discover your cosmic blueprint and life path through the positions of celestial bodies at your birth.',
    questions: '4 questions',
    duration: '~5 minutes',
    component: NatalChartQuiz,
  },
  {
    icon: <Sun className="w-12 h-12" />,
    title: 'Meditation Style Quiz',
    description: 'Find the perfect meditation practice that aligns with your energy and spiritual needs.',
    questions: '4 questions',
    duration: '~5 minutes',
    component: MeditationQuiz,
  },
];

const Quizzes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  const handleStartQuiz = (title: string) => {
    setActiveQuiz(title);
  };

  const ActiveQuizComponent = activeQuiz
    ? quizzes.find((q) => q.title === activeQuiz)?.component
    : null;

  return (
    <section id="quizzes" className="py-20 bg-gradient-to-b from-black to-purple-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Begin Your Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take our spiritual quizzes to gain insights into your cosmic nature and find your perfect path
          </p>
        </motion.div>

        {activeQuiz ? (
          <div>
            <button
              onClick={() => setActiveQuiz(null)}
              className="mb-8 text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to quizzes
            </button>
            {ActiveQuizComponent && <ActiveQuizComponent />}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all group"
              >
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  {quiz.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{quiz.title}</h3>
                <p className="text-gray-300 mb-6">{quiz.description}</p>
                <div className="flex justify-between text-sm text-gray-400 mb-6">
                  <span>{quiz.questions}</span>
                  <span>{quiz.duration}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleStartQuiz(quiz.title)}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Quiz
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Quizzes;