import React, { useState } from "react";
import "../styles/ticket.css"; // Import your CSS file

const Ticket = (props) => {
  return (
    <div className="link-container">
      {" "}
      <a href={props.href} className={props.className}>
        <h2>Ticket To {props.destination}</h2>
      </a>
    </div>
  );
};

export default Ticket;
