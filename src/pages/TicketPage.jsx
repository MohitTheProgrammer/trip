import { useEffect, useState } from "react";
import "./pagesStyle/pages.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Ticket from "../component/Ticket";
const TicketPage = () => {
  const [activetickets, setATickets] = useState([]);
  const [expiredtickets, setETickets] = useState([]);
  const param = useParams();
  useEffect(() => {
    const getTickets = async (uid) => {
      const activeTicket = [];
      const ticket = [];
      const expiredTicket = [];
      const res = await fetch(
        `https://on-the-move-55b84-default-rtdb.firebaseio.com/ticket/${uid}.json`
      );
      const data = await res.json();
      for (let key in data) {
        ticket.push(data[key]);
      }
      for (let i in ticket) {
        let date = new Date();
        if (date > new Date(ticket[i].date)) {
          expiredTicket.push(ticket[i]);
        } else {
          activeTicket.push(ticket[i]);
        }
      }
      setATickets(activeTicket);
      setETickets(expiredTicket);
    };
    getTickets(param.uid);
  }, []);
  return (
    <section className="ticket-page-section">
      <h1 className="ticket-section-heading">Your Tickets</h1>
      <div className="ticket-section-container">
        <div className="ticket-section-div-container">
          <h1 className="ticket-section-secondary-heading">Active Tickets</h1>
          {activetickets.length < 1 ? <h2 style={{color: "salmon"}}>Book Tickets at minimum price</h2> : ""}
          {activetickets.map((e, i) => (
            <Ticket
              href={`/trip/ticket/${param.uid}/${e.ticketId}`}
              key={i}
              className={"ticket active"}
              destination={e.destination}
            />
          ))}
        </div>
        <div className="ticket-section-div-container">
          <h1
            className="ticket-section-secondary-heading"
            style={{ color: "gray" }}
          >
            Expired Tickets
          </h1>
          {expiredtickets.length < 1 ? <h2 style={{color: "salmon"}}>No Expired Ticket</h2> : ""}
          {expiredtickets.map((e, i) => (
            <Ticket
              href={`/trip/ticket/${param.uid}/${e.ticketId}`}
              className={"ticket expired"}
              key={i}
              destination={e.destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketPage;

/*<Link to="">
            <h2>ticket</h2>
          </Link>  */
