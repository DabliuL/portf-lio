import React from 'react';

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">WL<span className="logo-accent">.dev</span></a>
      <nav>
        <a href="#experiences" className="nav-links">Experiências</a>
        <a href="#who-am-i" className="nav-links">Quem sou</a>
        <a href="#finished-sites" className="nav-links">Sites Finalizados</a>
        <a href="#my-projects" className="nav-links">Meus Projetos no GitHub</a>
        <a href="#contact" className="nav-links">Contato</a>
      </nav>
      <div className="box-btn-actions">
        <a href="https://wa.me/5521972962237" target="_blank" rel="noopener noreferrer" className="btn-action header-btn">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
