import React, { useEffect, useState } from 'react';
import './TicketForm.css';
import { useLoaderData } from 'react-router-dom';


export async function loader({ params }) {
  const response = await fetch(`https://riskanalysis.azurewebsites.net/Mortgage/SendTicketResponse?id=${params.ticketId}`);
  const ticketInfoList = await response.json();

  return { ticketInfoList };
}

function TicketForm() {
  const { ticketInfoList } = useLoaderData();
  console.log(ticketInfoList);

  const [selectedTicketIndex, setSelectedTicketIndex] = useState(0);
  const selectedTicket = ticketInfoList[selectedTicketIndex];

  useEffect(() => {
    if (ticketInfoList) {
      setSelectedTicketIndex(0);
    }
  }, [ticketInfoList]);

 

 return (
    
    <div className="response-form-container">
      <form method="get" className="response-form">
        <label htmlFor="TicketId" className="ticket-form-label">
          TicketID:
        </label>
        <input
          id="TicketId"
          value={selectedTicket.ticketId}
          className="ticket-form-input"
          readOnly
        />

        <label htmlFor="Title" className="ticket-form-label">
          Title:
        </label>
        <input
          type="text"
          id="Title"
          value={selectedTicket.title}
          className="ticket-form-input"
          readOnly
        />

        <label htmlFor="Description" className="ticket-form-label">
          Description:
        </label>
        <textarea
          id="Description"
          rows="3"
          value={selectedTicket.content}
          className="ticket-form-input"
          readOnly
        />

        <label htmlFor="Response" className="ticket-form-label">
          Response:
        </label>
        <textarea
          id="Response"
          rows="3"
          value={selectedTicket.response}
          className="ticket-form-input"
          readOnly
        />

      </form>
    </div>
  );
}

export default TicketForm;
