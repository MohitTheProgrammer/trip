//CSS imports
import "../styles/modal.css";

//Component import
import Button from "./Button";

//Image import
import Loading from "../assets/images/loading.gif";

const Modal = (props) => {
  return (
    <div className="backdrop" onClick={props.loading ? ()=>{} : props.onClick}>
      <div className="modal">
        <div className="modal-container">{props.children}</div>
        {props.loading ? (
          <img src={Loading} className="loading-img" alt="Loading..." />
        ) : (
          <>
            <h2 className={props.errorClassName}>{props.title}</h2>
            <p className="modal-message">{props.message}</p>
          </>
        )}
        {!props.loading && (
          <Button
            onclick={props.loading ? ()=>{} : props.onClick}
            className={"modal-close"}
            title={"Close"}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
