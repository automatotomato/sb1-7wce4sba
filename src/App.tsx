import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Quizzes from './components/Quizzes';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import YouTubeFeed from './components/YouTubeFeed';
import PodcastFeed from './components/PodcastFeed';
import MusicPlayer from './components/MusicPlayer';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import EmailPopup from './components/popup/EmailPopup';
import NatalChartCalculator from './components/NatalChartCalculator';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <EmailPopup />
      <Header />
      <Hero />
      <About />
      <Services />
      <NatalChartCalculator />
      <Quizzes />
      <Membership />
      <Testimonials />
      <YouTubeFeed />
      <PodcastFeed />
      <MusicPlayer />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;