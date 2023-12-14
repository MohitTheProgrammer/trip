import "../styles/vehicleCard.css";

const VehicleCard = (props) => {
  return (
    <a href={`/vehicle/${props.type}/${props.id}`} className="service-card">
      <div className="sevice-vehicle-info">
        <img src={props.image} alt="Setting" className="service-vehicle-img" />
        <h3 className="service-vehicle-heading">{props.name}</h3>
        <div>
          <h4>Capacity: {props.capacity}</h4>
          <h4>Top Speed: {props.topSpeed}</h4>
        </div>
      </div>
    </a>
  );
};

export default VehicleCard;
