import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white antialiased selection:bg-fuchsia-500/20 selection:text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
