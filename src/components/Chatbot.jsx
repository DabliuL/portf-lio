import React, { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBadge, setHasBadge] = useState(true);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [options, setOptions] = useState([]);
  
  const messagesContainerRef = useRef(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Função para abrir/fechar o chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasBadge) {
      setHasBadge(false);
    }
    if (!isOpen && messages.length === 0) {
      startChatbotFlow();
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'bot', time: getCurrentTime() }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender: 'user', time: getCurrentTime() }]);
  };

  const startChatbotFlow = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage("Olá! Sou o assistente virtual do Wesley Gabriel. 🤖");
      
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addBotMessage("Como posso te ajudar hoje? Escolha uma das opções abaixo para continuarmos:");
          showMainMenu();
        }, 1200);
      }, 600);
    }, 1200);
  };

  const showMainMenu = () => {
    setOptions([
      { text: "📂 Ver Projetos", value: "projects" },
      { text: "🛠️ Habilidades", value: "skills" },
      { text: "💬 Contato Direto", value: "contact" }
    ]);
  };

  const handleOptionClick = (option) => {
    // Adiciona fala do usuário
    addUserMessage(option.text);
    setOptions([]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      switch (option.value) {
        case "projects":
          addBotMessage("Ótima escolha! Vou te rolar diretamente para a seção de projetos do meu site.");
          setTimeout(() => {
            const projectsSection = document.getElementById('my-projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              addBotMessage("Aqui estão os meus principais repositórios sincronizados em tempo real com o GitHub!");
              setOptions([
                { text: "🛠️ Ver Habilidades", value: "skills" },
                { text: "💬 Falar com Wesley", value: "contact_wa" },
                { text: "🏠 Menu Principal", value: "menu" }
              ]);
            }, 1000);
          }, 1000);
          break;

        case "skills":
          addBotMessage("Eu sou especializado no desenvolvimento Front End (HTML5, CSS3, JavaScript) e em automações com Python.");
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              addBotMessage("Também tenho foco na criação de Chatbots de WhatsApp (como este que você está interagindo!) usando WhatsAppWeb.js.");
              setOptions([
                { text: "📂 Ver Projetos", value: "projects" },
                { text: "💬 Falar com Wesley", value: "contact_wa" },
                { text: "🏠 Menu Principal", value: "menu" }
              ]);
            }, 1200);
          }, 800);
          break;

        case "contact":
          addBotMessage("Perfeito! Vou preparar tudo para você falar diretamente com o Wesley no WhatsApp.");
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              addBotMessage("Clique no botão abaixo para iniciar a conversa no WhatsApp Real!");
              setOptions([
                { text: "💬 Abrir WhatsApp Real", value: "contact_wa" },
                { text: "🏠 Menu Principal", value: "menu" }
              ]);
            }, 1000);
          }, 800);
          break;

        case "contact_wa":
          addBotMessage("Redirecionando...");
          window.open("https://wa.me/5521972962237", "_blank", "noopener,noreferrer");
          setTimeout(() => {
            addBotMessage("Conversa aberta! Se precisar de algo mais, escolha abaixo:");
            showMainMenu();
          }, 1200);
          break;

        case "menu":
          addBotMessage("Como posso ajudar?");
          showMainMenu();
          break;

        default:
          addBotMessage("Desculpe, não entendi. Gostaria de voltar ao menu?");
          showMainMenu();
          break;
      }
    }, 1200);
  };

  return (
    <div id="whatsapp-widget" className="whatsapp-widget">
      {/* Botão Flutuante */}
      <button id="whatsapp-toggle" className="whatsapp-toggle" onClick={toggleChat} aria-label="Abrir Chatbot">
        {hasBadge && <span className="notification-badge">1</span>}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 .73 4.117 7.852 7.852 0 0 0 1.258 12.04L.062 16l4.083-1.071a7.863 7.863 0 0 0 3.736.938h.003a7.858 7.858 0 0 0 7.86-7.87 7.852 7.852 0 0 0-2.143-5.67zM7.893 14.19a6.51 6.51 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.86c-.22-.109-1.3-.642-1.501-.715-.202-.073-.349-.11-.497.109-.148.22-.572.715-.701.864-.13.149-.258.167-.478.058-.22-.109-.929-.342-1.77-1.092-.653-.582-1.093-1.302-1.221-1.52-.128-.218-.014-.336.096-.445.099-.1.22-.255.33-.382.11-.127.148-.218.22-.364.072-.146.036-.273-.018-.382-.055-.109-.498-1.2-.682-1.644-.179-.43-.362-.371-.497-.378-.129-.007-.277-.008-.426-.008-.149 0-.393.055-.599.278-.206.223-.788.772-.788 1.882 0 1.11.808 2.18 1.92 2.33 1.11.15 2.155.827 3.3 1.258.625.235 1.15.204 1.58.14.48-.07 1.3-.53 1.482-1.04.18-.512.18-.95.126-1.04-.056-.09-.203-.143-.423-.252z"/>
        </svg>
      </button>

      {/* Janela do Chat */}
      <div id="whatsapp-chat-window" className={`whatsapp-chat-window ${isOpen ? '' : 'hidden'}`}>
        <div className="chat-header">
          <div className="chat-avatar-status">
            <div className="chat-avatar-wrapper">
              <img src="images/perfil.png" alt="Wesley Gabriel" />
              <span className="status-indicator online"></span>
            </div>
            <div className="chat-user-info">
              <span className="chat-name">Wesley Gabriel</span>
              <span className="chat-status">Online (Assistente Virtual)</span>
            </div>
          </div>
          <button id="chat-close" className="chat-close" onClick={toggleChat} aria-label="Fechar Chat">&times;</button>
        </div>

        <div id="chat-messages" className="chat-messages" ref={messagesContainerRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
              <span className="time">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="typing-bubble" id="chat-typing-indicator">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          )}
        </div>

        {options.length > 0 && (
          <div className="chat-options-container" id="chat-options-container">
            {options.map((opt, index) => (
              <button
                key={index}
                className="chat-option-btn"
                onClick={() => handleOptionClick(opt)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        )}

        <div className="chat-footer">
          <input type="text" id="chat-input" placeholder="Digite uma mensagem..." readOnly />
          <button id="chat-send" className="chat-send-btn" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
