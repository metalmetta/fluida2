import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WaitlistForm />
    </div>
  );
}

export default App;