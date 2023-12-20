import "../styles/service.css";
import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";

const Service = () => {
  const [bus, setBus] = useState([]);
  const [car, setCar] = useState([]);
  useEffect(() => {
    const buses = [];
    const busArr = [];
    const cars = [];
    const carArr = [];
    const fetchBus = async () => {
      const res = await fetch(
        "https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/bus.json"
      );
      const resData = await res.json();
      for (let keys in resData) {
        buses.push(resData[keys]);
      }
      buses.map((elm) => {
        for (let key in elm) {
          busArr.push({
            id: elm[key].id,
            name: elm[key].name,
            type: elm[key].type,
            image: elm[key].imageURL,
            topSpeed: elm[key].topSpeed,
            capacity: elm[key].capacity,
          });
        }
      });
      setBus(busArr);
    };
    fetchBus();

    const fetchCar = async () => {
      const res = await fetch(
        "https://on-the-move-55b84-default-rtdb.firebaseio.com/vehicle/car.json"
      );
      const resData = await res.json();
      for (let keys in resData) {
        cars.push(resData[keys]);
      }
      cars.map((elm) => {
        for (let key in elm) {
          carArr.push({
            id: elm[key].id,
            name: elm[key].name,
            type: elm[key].type,
            image: elm[key].imageURL,
            topSpeed: elm[key].topSpeed,
            capacity: elm[key].capacity,
          });
        }
      });
      setCar(carArr);
    };
    fetchCar();
  }, []);
  return (
    <div className="service-card-container">
      <h1 className="service-main-heading">AC BUS</h1>
      <div className="service-card-section">
        {bus.map(
          (elm) =>
            elm.id.includes("non") || (
              <VehicleCard
                desc={elm.description}
                key={elm.id}
                type={elm.type}
                id={elm.id}
                name={elm.name}
                image={elm.image}
                capacity={elm.capacity}
                topSpeed={elm.topSpeed + " KMph"}
              />
            )
        )}
      </div>
      <h1 className="service-main-heading">NON-AC BUS</h1>
      <div className="service-card-section">
        {bus.map(
          (elm) =>
            elm.id.includes("non") && (
              <VehicleCard
                desc={elm.description}
                key={elm.id}
                id={elm.id}
                type={elm.type}
                name={elm.name}
                image={elm.image}
                capacity={elm.capacity}
                topSpeed={elm.topSpeed + " KMph"}
              />
            )
        )}
      </div>
      {/* <h1 className="service-main-heading">Luxury Sedans</h1>
      <div className="service-card-section">
        {car.map(
          (elm) =>
            elm.id.includes("sedan") && (
              <VehicleCard
                desc={elm.description}
                key={elm.id}
                id={elm.id}
                type={elm.type}
                name={elm.name}
                image={elm.image}
                capacity={elm.capacity}
                topSpeed={elm.topSpeed + " KMph"}
              />
            )
        )}
      </div> */}
      {/* <h1 className="service-main-heading">Luxury SUV</h1>
      <div className="service-card-section">
        {car.map(
          (elm) =>
            elm.id.includes("suv") && (
              <VehicleCard
                desc={elm.description}
                key={elm.id}
                id={elm.id}
                type={elm.type}
                name={elm.name}
                image={elm.image}
                capacity={elm.capacity}
                topSpeed={elm.topSpeed + " KMph"}
              />
            )
        )}
      </div> */}
    </div>
  );
};

export default Service;
