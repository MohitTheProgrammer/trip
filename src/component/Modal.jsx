import "../styles/modal.css";
import Button from "./Button";
const Modal = (props) => {
  return (
    <div className="backdrop" onClick={props.onClick} >
      <div className="modal">
        <div className="modal-container">{props.children}</div>
        <Button
            onclick={props.onClick}
            className={"btn modal-close"}
            title={"Close"}
          />
      </div>
    </div>
  );
};

export default Modal;
