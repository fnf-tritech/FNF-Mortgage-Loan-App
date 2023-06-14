import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import './Chatbot.css';
import NavBar from './NavBar';
import Header  from './Header';


const API_URL = 'https://api.openai.com/v1/chat/completions';

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  // eslint-disable-next-line
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);
  // eslint-disable-next-line
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    setConversation([{ text: 'Hello! How can I help you today?', sender: 'bot' }]);
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send message to OpenAI API
    try {
      setLoading(true);
      const response = await axios.post(
        API_URL,
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: message },
          ],
          model: model,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Update conversation state with user's message
      setConversation((prevConversation) => [
        ...prevConversation,
        { text: message, sender: 'user' },
      ]);

      // Update conversation state with bot's response
      setConversation((prevConversation) => [
        ...prevConversation,
        {
          text: response.data.choices[0].message.content,
          sender: 'bot',
        },
      ]);

      // Set the message status to 'sent' after sending the user's message
      setMessageStatus('sent');

      // Set the message status to 'received' after receiving the bot's response
      setMessageStatus('received');
    } catch (err) {
      console.error(err);
    }

    // Clear input field
    setMessage('');
    setLoading(false);
  };

  return (
    <div>
      
      <Header />
      <NavBar />
      {/* Add some Bootstrap and Tailwind classes to the chatbot container */}
      <div className="chatbot-container container-fluid d-flex flex-column justify-content-end align-items-center h-screen">
        {/* Add some Bootstrap and Tailwind classes to the conversation container */}
        <div className="conversation-container w-75 overflow-auto h-4/5">
          {conversation.map((msg, i) => (
            // Pass the sender and status as props to the ChatMessage component
            <ChatMessage key={i} message={msg} sender={msg.sender} status={messageStatus} />
          ))}
          {loading && (
            <div className="loading-indicator">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
        {/* Add some Bootstrap and Tailwind classes to the form and input elements */}
        <div className="w-75">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={handleChange}
              className="form-control rounded-l-lg"
            />
            <button type="submit" className="btn btn-primary rounded-r-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
