import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.css';

const ChatMessage = ({ message, sender, status }) => {
  const { text } = message;
  // Use the sender and status props to determine the message class
  const messageClass = sender === 'user' ? 'user-message' : 'bot-message';

  return (
    <div className={`message ${messageClass}`}>
      <p className="message-text">{text}</p>
      {/* Render a check mark icon if the message is sent by the user and has a 'sent' status */}
      {sender === 'user' && status === 'sent' && (
        <i className="fas fa-check"></i>
      )}
      {/* Render a double check mark icon if the message is sent by the user and has a 'received' status */}
      {sender === 'user' && status === 'received' && (
        <i className="fas fa-check-double"></i>
      )}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  }).isRequired,
  sender: PropTypes.string.isRequired, // Add the sender prop type
  status: PropTypes.string.isRequired, // Add the status prop type
};

export default ChatMessage;
