import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlGitHub = 'https://api.github.com/users/DabliuL/repos';
    
    fetch(urlGitHub)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        return response.json();
      })
      .then(repos => {
        // Ordena repositórios: mais estrelas primeiro, depois por atualização
        repos.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        // Filtra para remover forks e limita aos 6 principais
        const originalRepos = repos.filter(repo => !repo.fork);
        setProjects(originalRepos.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Erro ao carregar projetos. Tente novamente mais tarde.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="my-projects" className="fourth-section">
      <h2 className="title">Meus projetos</h2>
      <p className="section-desc">Projetos públicos integrados dinamicamente com o meu GitHub</p>
      
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', color: '#ef4444', padding: '2rem' }}>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((repo) => {
            let langClass = 'lang-other';
            const langLower = repo.language ? repo.language.toLowerCase() : '';
            if (langLower === 'javascript') langClass = 'lang-javascript';
            else if (langLower === 'html') langClass = 'lang-html';
            else if (langLower === 'css') langClass = 'lang-css';
            else if (langLower === 'python') langClass = 'lang-python';

            const description = repo.description || 'Sem descrição disponível no momento.';

            return (
              <div key={repo.id} className="project-card">
                <div>
                  <div className="project-header">
                    <div className="project-folder-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="project-links">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" title="Ver código no GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" title="Acessar demonstração online">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3>{repo.name}</h3>
                  <p className="project-desc">{description}</p>
                </div>
                <div className="project-footer">
                  <div className="project-lang">
                    <span className={`lang-dot ${langClass}`}></span>
                    <span>{repo.language || 'Outro'}</span>
                  </div>
                  <div className="project-stats">
                    <span title="Estrelas">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span title="Forks">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch">
                        <line x1="6" y1="3" x2="6" y2="15"></line>
                        <circle cx="18" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                      </svg>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
