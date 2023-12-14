import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/oneVehicleCard.css";

const OneVehicleCard = () => {
  const params = useParams();
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    let url = "";
    if (params.type === "bus") {
      url = `https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/${
        params.type
      }/${params.id.includes("non") ? "non-ac" : "ac"}/${params.id}.json`;
    } else {
      url = `https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/car/${
        params.id.includes("sedan") ? "sedan" : "suv"
      }/${params.id}.json`;
    }
    const fetchVehicle = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setVehicle({ ...resData });
    };
    fetchVehicle();
  }, []);
  return (
    <div className="single-vehicle-container">
      <h1 className="vehicle-heading">{vehicle.type + "'s " + " Detail"} </h1>
      <div className="vehicle-info-container">
        <div className="vehicle-img-info-div">
          <img
            src={vehicle.imageURL}
            alt={vehicle.type}
            className="vehicle-img"
          />
          <div className="vehicle-info-div">
            <h2 className="vehicle-name">
              <span style={{ color: "black" }}>name:</span> {vehicle.name}
            </h2>
            <h4 className="vehicle-info">
              <span style={{ color: "black" }}>top Speed:</span>{" "}
              {vehicle.topSpeed} KMph
            </h4>
            <h4 className="vehicle-info">
              <span style={{ color: "black" }}>capacity: </span>
              {vehicle.capacity} Seats
            </h4>
            <h4 className="vehicle-info">
              <span style={{ color: "black" }}>vehicle type: </span>
              {vehicle.type}{" "}
            </h4>
          </div>
        </div>
        <h1 className="vehicle-heading">{vehicle.type + "'s "} Description</h1>
        <div className="vehicle-desc">{vehicle.description}</div>
      </div>
    </div>
  );
};

export default OneVehicleCard;
