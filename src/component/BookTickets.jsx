import "../styles/tickets.css";
import { useState, useRef, useContext } from "react";
import AuthContext from "../firbase/auth-context";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firbase/config";
import { ref, set } from "firebase/database";

const BookTickets = () => {
  const ctx = useContext(AuthContext);
  const [time, setTime] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [isError, setError] = useState(false);
  const [showModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const nameRef = useRef();
  const phoneRef = useRef();
  const ticketRef = useRef();
  const destinationRef = useRef();
  const dateRef = useRef();

  const haversine = (lat2, lon2) => {
    let lat1 = toRadians(28.652946);
    let lon1 = toRadians(77.302284);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);
    let dlat = lat2 - lat1;
    let dlon = lon2 - lon1;
    let a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const radiusOfEarth = 6371;
    let distance = radiusOfEarth * c;
    return distance;
  };
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  const bookTicket = async (e) => {
    e.preventDefault();
    if (!ctx.user.uid) {
      setModal(true);
      setError(true);
      setMessage("Please login for booking");
      return;
    }

    const uniqueString = uuidv4();
    let name = nameRef.current.value;
    let phone = phoneRef.current.value;
    let ticket = ticketRef.current.value;
    ticket = Number(ticket);
    let destination = destinationRef.current.value;
    let date = dateRef.current.value;
    let ticketId = `${ctx.user.uid}${destination}${uniqueString}`;
    let userDate = new Date(date);
    let currentDate = new Date();

    if (userDate <= currentDate) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("Date cannot be the previous date or todays date");
      return;
    }

    if (phone.length != 10) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("Phone number must be 10 characters long");
      return;
    }
    if (phone.includes("-") || phone.includes("+")) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("Phone number not allowed any symbol ");
      return;
    }
    if (phone.startsWith("00")) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("Cannot be starts with 00");
      return;
    }
    if (ticket < 1) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("Book atleast 1 ticket");
      return;
    }
    if (ticket > 10) {
      setLoading(false);
      setModal(true);
      setError(true);
      setMessage("You can book 10 tickets at once");
      return;
    }

    setModal(true);
    setLoading(true);

    const latAndLongURL = `https://api.api-ninjas.com/v1/geocoding?city=${destination}&country=india`;
    const cred = {
      "X-Api-Key": "WYn6NG2ukvmb2UXIIs0HKQ==w0VVp7evJNRScl1r",
      "Content-Type": "application/json",
    };
    const getCordinateRes = await fetch(latAndLongURL, {
      method: "GET",
      headers: cred,
    });
    const cordinateData = await getCordinateRes.json();
    if (cordinateData.length === 0) {
      setError(true);
      setLoading(false);
      setMessage(
        `Our services are expanding to ${destination}. OR Please check City name`
      );
      return;
    }
    const lat = cordinateData[0].latitude;
    const long = cordinateData[0].longitude;

    const distance = haversine(lat, long);
    const price = (
      vehicleType == "non-ac" ? distance * 2 : distance * 5
    ).toFixed(2);
    const totalPrice = (price * ticket).toFixed(2);
    const detail = {
      name,
      phone,
      ticket,
      destination,
      date,
      time,
      vehicleType: vehicleType ? vehicleType : "ac",
      ticketId,
      price,
      totalPrice,
      distance: `${distance.toFixed(2)} km`,
    };
    try {
      await set(ref(db, `ticket/${ctx.user.uid}/${ticketId}`), detail);
    } catch (e) {
      setError(true);
      setLoading(false);
      setMessage("Apologies, currently unable to book your tickets");
      return;
    }
    nameRef.current.value = "";
    phoneRef.current.value = "";
    destinationRef.current.value = "";
    ticketRef.current.value = "";
    dateRef.current.value = "";
    setVehicleType("");
    setTime("");
    setLoading(false);
  };
  const hideModal = () => {
    setModal(false);
    setError(false);
    setMessage("");
    setLoading(false);
  };
  return (
    <>
      {showModal && (
        <Modal
          loading={isLoading}
          onClick={hideModal}
          errorClassName={isError ? "error" : "success"}
          message={
            isError
              ? errorMessage
              : "Ticket booked successfully. Thank you for choosing our service."
          }
          title={isError ? "Error" : "Success"}
        />
      )}
      <form action="" className="ticket-form" onSubmit={bookTicket}>
        <h1 className="ticket-heading">Book Your Tour Now</h1>
        <div className="ticket-input-div">
          <label htmlFor="ticket-name">Name*</label>
          <input
            type="text"
            id="ticket-name"
            className="ticket-input"
            ref={nameRef}
            required
            disabled={!ctx.user.uid ? true : false}
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-phone">Phone no.*</label>
          <input
            type="number"
            id="ticket-phone"
            className="ticket-input"
            ref={phoneRef}
            min={0}
            max={9999999999}
            disabled={!ctx.user.uid ? true : false}
            required
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-number">No. of Ticket*</label>
          <input
            type="number"
            id="ticket-number"
            className="ticket-input"
            ref={ticketRef}
            disabled={!ctx.user.uid ? true : false}
            required
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-origin">Origin</label>
          <input
            type="text"
            id="ticket-origin"
            value={"Delhi Anand Vihar"}
            disabled
            className="ticket-input"
            required
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-destination">Destination*</label>
          <input
            type="text"
            id="ticket-destination"
            className="ticket-input"
            ref={destinationRef}
            disabled={!ctx.user.uid ? true : false}
            required
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-date">Date*</label>
          <input
            type="date"
            id="ticket-date"
            className="ticket-input"
            ref={dateRef}
            disabled={!ctx.user.uid ? true : false}
            required
          />
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-time">Time*</label>
          <select
            name=""
            id="ticket-time"
            className="ticket-input"
            disabled={!ctx.user.uid ? true : false}
            required
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="ac" disabled>
              Select Time
            </option>
            <option value="5:15 AM">5:15 AM</option>
            <option value="6:45 AM">6:45 AM</option>
            <option value="8:15 AM">8:15 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:15 AM">11:15 AM</option>
            <option value="12:15 PM">12:15 PM</option>
            <option value="1:45 PM">1:45 PM</option>
            <option value="3:45 PM">3:45 PM</option>
            <option value="4:45 PM">4:45 PM</option>
            <option value="5:15 PM">5:15 PM</option>
            <option value="6:45 PM">6:45 PM</option>
            <option value="7:15 PM">7:15 PM</option>
            <option value="8:30 PM">8:30 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="10:15 PM">10:15 PM</option>
            <option value="11:00 PM">11:00 PM</option>
            <option value="11:30 PM">11:30 PM</option>
            <option value="12:15 AM">12:15 AM</option>
            <option value="01:00 AM">01:00 AM</option>
          </select>
        </div>
        <div className="ticket-input-div">
          <label htmlFor="ticket-vehicle-type">Select Bus type*</label>
          <select
            name=""
            id="ticket-vehicle-type"
            className="ticket-input"
            required
            disabled={!ctx.user.uid ? true : false}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="ac" disabled>
              Select Bus Type
            </option>
            <option value="ac">AC-Bus</option>
            <option value="non-ac">Non-AC-Bus</option>
          </select>
          <button className="btn ticket-btn">Book Now</button>
        </div>
      </form>
    </>
  );
};

export default BookTickets;
