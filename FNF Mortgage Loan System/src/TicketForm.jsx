import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import NavBar from './NavBar';
import Sidebar from './Sidebar1';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function TicketForm() {
  const initialValues = {
    Id: '',
    Title: '',
    content: ''
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(e.target.value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.Id + ' ' + formValues.Title + ' ' + formValues.content);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputValue('');
    axios
      .post('https://riskanalysis.azurewebsites.net/Mortgage/AddTicket', {
        method: 'POST',
        id: formValues.Id,
        title: formValues.Title,
        content: formValues.content,
        ticketDate: 'string',
        Response: 'NULL'
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
    // window.location.reload(true);
  };

  return (
    <div>
      
      <Header/>
      <NavBar />

      
      
      <h1>Have a Question? Raise a Ticket!</h1>
      <div className="ticket-form-container">
        
          <Sidebar />
         <form onSubmit={handleSubmit} className="ticket-form">
          <label htmlFor="Id" className="ticket-form-label">
          Id:
        </label>
        <input
          type="text"
          class="form-control"      
            id="Id"
            name='Id'
          value={formValues.Id}
          placeholder="Enter your Id"        
          onChange={handleChange}
          className="ticket-form-input"
        />
        <br />
        <label htmlFor="Title" className="ticket-form-label">
          Title:
        </label>
        <input
          type="text"
          class="form-control"      
            id="Title"
            name='Title'
          value={formValues.Title}
          placeholder="Provide your Issue"        
          onChange={handleChange}
          className="ticket-form-input"
        />
        <br />
        <label htmlFor="content" className="ticket-form-label">
          content:
        </label>
        <textarea
          id="content"
          rows = "3"        
            value={formValues.content}
            name='content'
          placeholder="Enter the Detailed content"        
          onChange={handleChange}
          className="ticket-form-input"
        />
        <br />
        <button type="submit" className="ticket-form-button" onClick={handleSubmit}>
          Submit
          </button>
          
        </form> 
        <Outlet></Outlet>
    </div>
      </div>
    
  );
}
export default TicketForm;
