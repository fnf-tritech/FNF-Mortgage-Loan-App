import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ChatMessage = ({ text, sender, status }) => (
  <div
    className={`chat-message ${status}`}
    style={{
      borderRadius: 20,
      padding: 10,
      margin: 10,
      backgroundColor: sender === 'bot' ? '#508fd2' : '#d3d3d3',
    }}
  >
    <strong>{sender}</strong>
    <span>{text}</span>
  </div>
);

const ChatbotButton = ({ onClick }) => (
  <Button
    variant="secondary"
    onClick={onClick}
    className="btn btn-primary"
    style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 9999,
    }}
  >
    Need Help ?
  </Button>
);

const ChatbotHome = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      {showChatbot && (
        <div className="card" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
          <div className="card-body">
            <a href="/Chatbot" className="styled-link">Chatbot</a>
            <a href="/faq" className="styled-link">Faq</a>
          </div>
        </div>
      )}
      <ChatMessage text="" sender="" status="received" />
      <ChatbotButton onClick={toggleChatbot} />
    </div>
  );
};

export default ChatbotHome;
