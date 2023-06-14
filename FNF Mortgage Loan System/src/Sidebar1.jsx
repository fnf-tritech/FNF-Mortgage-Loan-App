import React,{ useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './TicketForm.jsx';



function Sidebar() {

  const [tickets, setTickets] = useState([]);
  

  useEffect(() => {
    const fetchTicketIds = async () => {
      
     await fetch(`https://riskanalysis.azurewebsites.net/Mortgage/GetTicketHistorybyId?Id=${localStorage.getItem("uid")}`)
        .then(response => response.json())
        .then(data => setTickets(data));
    }
    fetchTicketIds();
  }, []);
  
  

  return (
    <nav className="tkt col-md-2 d-none text-black d-md-block  sidebar">
      
      <p><b> Ticket History</b></p>
      <ul>
        {tickets.map(ticket => (
          <li className="text-black" key={ticket.ticketId} >
            <Link className="text-black" to={`ticket/${ticket.ticketId}`}>
              Ticket   #{ticket.ticketId}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default Sidebar;
