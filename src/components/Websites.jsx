import React from 'react';

const websitesData = [
  {
    name: "Paróquia Nossa Senhora da Guia",
    url: "https://paroquiansdaguia.netlify.app/",
    description: "Site institucional desenvolvido para a Paróquia Nossa Senhora da Guia, contendo informações sobre pastorais, horários de missas, eventos e notícias da comunidade.",
    technologies: ["React.js", "CSS Grid", "Flexbox"],
    image: "images/paroquia.png"
  },
  {
    name: "HabemusApp",
    url: "https://habemusapp.netlify.app/",
    description: "Aplicação interativa contendo recursos e ferramentas úteis, desenhada com foco em experiência do usuário e design moderno.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "images/habemus.png"
  },
  {
    name: "Magnificat Marketing",
    url: "https://magnificatmarketing.netlify.app/",
    description: "Landing Page profissional de alta conversão estruturada para a agência de marketing Magnificat, com design responsivo premium e chamadas para ação estratégicas.",
    technologies: ["React.js", "Glassmorphism", "Vite"],
    image: "images/magnificat.png"
  }
];

export default function Websites() {
  return (
    <section id="finished-sites" className="fourth-section" style={{ background: 'var(--bg-base)' }}>
      <h2 className="title">Sites Finalizados</h2>
      <p className="section-desc">Alguns dos meus principais projetos em produção hospedados na web</p>
      
      <div className="projects-grid">
        {websitesData.map((site, index) => (
          <div key={index} className="project-card" style={{ padding: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', height: '100%' }}>
              <div style={{
                width: '100%',
                height: '160px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-glass)'
              }}>
                <img 
                  src={site.image} 
                  alt={`Prévia de ${site.name}`} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              <div>
                <div className="project-header" style={{ marginBottom: '0.8rem', marginTop: '0.4rem' }}>
                  <div className="project-folder-icon" style={{ color: 'var(--color-secondary)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" title="Acessar site online" style={{ color: 'var(--color-secondary)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3>{site.name}</h3>
                <p className="project-desc" style={{ marginBottom: '1rem' }}>{site.description}</p>
              </div>
              
              <div className="project-footer" style={{ marginTop: 'auto' }}>
                <div className="project-lang" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {site.technologies.map((tech, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '20px',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-secondary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
