import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, ArrowRight, Calendar } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'What is your birth date?',
    type: 'date',
  },
  {
    id: 2,
    question: 'What time were you born? (If known)',
    type: 'time',
  },
  {
    id: 3,
    question: 'Where were you born?',
    type: 'text',
    placeholder: 'City, Country',
  },
  {
    id: 4,
    question: 'What area of life are you seeking guidance in?',
    type: 'select',
    options: [
      'Career & Purpose',
      'Love & Relationships',
      'Personal Growth',
      'Spiritual Path',
      'General Life Direction',
    ],
  },
];

const NatalChartQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showBooking, setShowBooking] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowBooking(true);
    }
  };

  if (showBooking) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Star className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h3 className="text-2xl font-bold text-white mb-4">Your Cosmic Journey Awaits</h3>
          <p className="text-gray-300">
            Based on your responses, a personalized natal chart reading will provide deep insights into your life path.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-white mb-4">Natal Chart Reading Session</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                90-minute in-depth reading
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                Personalized birth chart analysis
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                Future transit predictions
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                Recorded session & PDF summary
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between mb-8">
            <span className="text-3xl font-bold text-white">$149</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Your Reading
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Moon className="w-8 h-8 text-purple-400" />
          <div className="text-gray-400">
            Question {currentStep + 1} of {questions.length}
          </div>
        </div>
        <div className="h-2 bg-white/10 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
      >
        <h3 className="text-2xl font-semibold text-white mb-6">
          {questions[currentStep].question}
        </h3>

        <div className="space-y-4">
          {questions[currentStep].type === 'select' ? (
            <div className="grid gap-3">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(questions[currentStep].id, option)}
                  className={`p-4 rounded-lg border ${
                    answers[questions[currentStep].id] === option
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-purple-500/30 hover:border-purple-500/60'
                  } text-left text-white transition-colors`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              type={questions[currentStep].type}
              placeholder={questions[currentStep].placeholder}
              onChange={(e) => handleAnswer(questions[currentStep].id, e.target.value)}
              className="w-full p-4 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="mt-8 w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2"
        >
          {currentStep === questions.length - 1 ? 'View Your Results' : 'Next'}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NatalChartQuiz;