import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const phrases = ["desenvolvedor Front End.", "especialista em Chatbots.", "estudante de ADS.", "freelancer criativo."];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="first-section">
      <div className="hero-content">
        <h1>Olá! Eu sou o <br /> <strong>Wesley Gabriel</strong></h1>
        <p className="hero-subtitle">Tenho 20 anos, sou <span id="typing-text">{text}</span></p>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '550px' }}>
          Desenvolvedor focado em criar Landing Pages de alta performance e Chatbots inteligentes de WhatsApp para impulsionar negócios.
        </p>
        <div className="hero-buttons">
          <a href="https://wa.me/5521972962237" target="_blank" rel="noopener noreferrer" className="btn-action primary-btn">
            Falar Comigo
          </a>
          <a href="#who-am-i" className="btn-action secondary-btn">
            Saber mais
          </a>
        </div>
      </div>
      <div className="box-img-main">
        <div className="profile-glow-ring">
          <img className="img-profile" src="images/perfil.png" alt="Wesley Gabriel - Perfil" />
        </div>
      </div>
    </section>
  );
}
