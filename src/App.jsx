import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Websites from './components/Websites';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Websites />
        <Projects />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
