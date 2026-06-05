import React from 'react';

const skillsData = [
  {
    tech: 'html',
    name: 'HTML5',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6H6.8l.2 2.3h10l-.3 3.4L12 18.2l-4.7-1.5-.3-3.4H9.4l.2 1.7 2.4.8 2.4-.8.2-2.7H7.4L6.9 6h10.3z"/>
      </svg>
    )
  },
  {
    tech: 'css',
    name: 'CSS3',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.1H6.8l.2 2.2h9.7l-.3 3.4-4.4 1.5-4.4-1.5-.3-3.4H5l.3 5.6 6.7 2.2 6.7-2.2.8-7.9z"/>
      </svg>
    )
  },
  {
    tech: 'javascript',
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M0 0h24v24H0V0zm18.3 16.5c0-.9-.6-1.5-1.7-1.8l-1.1-.3c-.6-.2-.8-.4-.8-.7 0-.4.3-.6.8-.6.5 0 .8.2 1 .5l1.4-.9c-.4-.7-1.1-1.2-2.1-1.3v-1.4h-1.6v1.4c-1.3.1-2.2.9-2.2 2 0 1 .6 1.7 1.7 2l1.1.3c.7.2.9.4.9.8 0 .4-.4.7-1 .7-.7 0-1.1-.3-1.4-.8l-1.4.8c.4.9 1.3 1.5 2.4 1.6v1.4h1.6v-1.4c1.3-.1 2.3-1 2.3-2.2z"/>
      </svg>
    )
  },
  {
    tech: 'python',
    name: 'Python',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.5 13.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-.3-3.8c-.1.3-.3.5-.6.6-.4.1-.8-.2-.9-.6L11 7.4c-.1-.5.3-1 .8-1 .5 0 .8.3.9.8l.1 4.5z"/>
      </svg>
    )
  },
  {
    tech: 'whatsapp',
    name: 'WhatsAppWeb.js',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 0 12.029C0 5.395 5.385 0 12.022 0c6.64 0 12.024 5.395 12.024 12.03 0 6.634-5.385 12.03-12.024 12.03-2.128 0-4.148-.557-5.918-1.529L0 24zm6.076-4.181l.361.215a9.952 9.952 0 0 0 5.585 1.693c5.539 0 10.048-4.512 10.048-10.057 0-5.543-4.509-10.057-10.048-10.057C6.485 1.97 1.973 6.485 1.973 12.03c0 2.228.736 4.397 2.13 6.182l.235.3-.98 3.58 3.676-.963-.076-.11z"/>
      </svg>
    )
  }
];

export default function Skills() {
  return (
    <section id="experiences" className="second-section">
      <h2 className="title">Habilidades & Tecnologias</h2>
      <p className="section-desc">Algumas das ferramentas e linguagens que utilizo no meu dia a dia para construir soluções de alto impacto:</p>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.tech} className="skill-card" data-tech={skill.tech}>
            <div className="skill-icon">
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
