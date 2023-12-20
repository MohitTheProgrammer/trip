import "./pagesStyle/pages.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../component/Button";

const ShowTicketPage = () => {
  const param = useParams();
  const [ticket, setTicket] = useState({});
  useEffect(() => {
    const getTicket = async (uid, ticketId) => {
      const res = await fetch(
        `https://on-the-move-55b84-default-rtdb.firebaseio.com/ticket/${uid}/${ticketId}.json`
      );
      const data = await res.json();
      setTicket({ ...data });
    };
    getTicket(param.uid, param.ticketId);
  }, []);
  return (
    <section className="showticket-section">
      <div className="showticket-container">
        <h1 className="showticket-heading">Trip To</h1>
        <div className="showticket-info">
          <h3>
            Name:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.name}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Origin:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {" "}
              Delhi Anand Vihar
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Destination:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.destination}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Distance:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.distance}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Phone No:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.phone}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Ticket:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.ticket}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Price:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.price}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Total Price:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.totalPrice}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Date:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.date}
            </span>
          </h3>
        </div>
        <div className="showticket-info">
          <h3>
            Time:{" "}
            <span style={{ color: "#2c925e", textTransform: "capitalize" }}>
              {ticket.time}
            </span>
          </h3>
        </div>
        <p>Thanks for using our service! HAPPY JOURNEY</p>
        <Button
          className={"btn print-btn"}
          onclick={window.print}
          title={"Print"}
        />
      </div>
    </section>
  );
};
export default ShowTicketPage;
