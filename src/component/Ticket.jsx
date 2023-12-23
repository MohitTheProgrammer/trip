import React, { useState } from "react";
import "../styles/ticket.css"; // Import your CSS file
import { Link } from "react-router-dom";

const Ticket = (props) => {
  return (
    <div className="link-container">
      {" "}
      <Link to={props.href} className={props.className}>
        <h2>Ticket To {props.destination}</h2>
      </Link> 
    </div>
  );
};

export default Ticket;
