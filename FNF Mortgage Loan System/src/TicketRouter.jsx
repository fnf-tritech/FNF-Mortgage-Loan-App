import React from 'react';
import TicketForm from './TicketForm';
import ResponseForm, { loader as ticketLoader } from './ResponseForm';

// Create a TicketRouter component that renders the TicketForm and ResponseForm components based on the path
const TicketRouter = () => {
  return (
    <TicketForm>
      <ResponseForm path="ticket/:ticketId" loader={ticketLoader} />
    </TicketForm>
  );
};

export default TicketRouter;