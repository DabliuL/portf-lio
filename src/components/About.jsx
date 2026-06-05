import React from 'react';

export default function About() {
  return (
    <section id="who-am-i" className="third-section">
      <h2 className="title">Quem sou eu?</h2>
      <p className="section-desc">Um pouco sobre minha jornada acadêmica e profissional</p>
      <div className="about-container">
        <div className="about-img-box">
          <div className="about-glow-card">
            <div className="about-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.7 4 4.72 5.512 4.074a.5.5 0 1 1 .396.92C4.7 5.438 4 6.945 4 8.062c0 1.118.7 2.625 1.908 3.148a.5.5 0 1 1-.396.92C4 11.404 3 9.422 3 8.062Zm10 0c0-1.117-.7-2.624-1.908-3.148a.5.5 0 1 1 .396-.92C13 4.72 14 6.7 14 8.062c0 1.118-.7 2.625-1.908 3.148a.5.5 0 1 1-.396-.92C12 11.404 13 9.422 13 8.062Z"/>
                <path d="M1.11 5.086A2 2 0 0 1 3.11 3h9.78a2 2 0 0 1 2 2v5.828a2 2 0 0 1-2 2H3.11a2 2 0 0 1-2-2V5.086Zm2 .914v5.828h9.78V6H3.11Z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            Meu nome é <strong>Wesley Gabriel</strong>, estou cursando o último período de <strong>Análise e Desenvolvimento de Sistemas</strong> na Universidade Estácio de Sá e sou formado em <strong>Técnico em Informática</strong> pela Fundação de Apoio à Escola Técnica (FAETEC).
          </p>
          <p>
            Atualmente trabalho como <strong>Front End developer Freelancer</strong> com foco na criação de websites modernos, Landing Pages e desenvolvimento de <strong>Chatbots de WhatsApp</strong> automatizados direcionados para empresas e comércios locais, ajudando-os a alavancar suas vendas e atendimentos automatizados.
          </p>
        </div>
      </div>
    </section>
  );
}
