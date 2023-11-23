import "../styles/contact.css";
import Button from "./Button";
import { useRef, useContext, useState } from "react";
import { db } from "../firbase/config";
import { set, ref } from "firebase/database";
import AuthContext from "../firbase/auth-context";
import Modal from "../component/Modal";


const Contact = () => {
  const ctx = useContext(AuthContext);
  const [isError, setError] = useState(false);
  const [showModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setModal(true);
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    if (!ctx.user.uid) {
      setMessage("Please login first for contact us");
      setLoading(false);
      setError(true);
      return;
    }
    try {
      await set(ref(db, `query/${ctx.user.uid}`), {
        name,
        email,
        message,
      });
      setLoading(false);
    } catch (err) {
      setMessage("Something went wrong!");
      setLoading(false);
      setError(true);
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const hideModal = () => setModal(false);

  return (
    <>
      {showModal && (
        <Modal
          loading={isLoading}
          onClick={hideModal}
          errorClassName={isError ? "error" : "success"}
          message={isError ? errorMessage : "We will notify you soon"}
          title={isError ? "Error" : "Success"}
        />
      )}
      <div className="contact-container">
        <span className="contact-heading">Get in touch</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127450.10996442482!2d-76.60806467307009!3d3.3950608971812466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sin!4v1700733476729!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "none" }}
          loading="lazy"
        ></iframe>
        <div className="second-contact-portion">
          <div className="form-contact-container">
            <form onSubmit={onSubmitHandler} className="contact-form">
              <h3 className="contact-form-heading">Contact Form</h3>
              <input
                placeholder={"Name"}
                type="text"
                required
                ref={nameRef}
                className="form-contact-input"
              />
              <input
                placeholder={"Email"}
                type="email"
                required
                ref={emailRef}
                className="form-contact-input"
              />
              <textarea
                placeholder={"Message..."}
                className="form-message"
                required
                ref={messageRef}
                cols="30"
                rows="10"
              ></textarea>
              <Button className={"btn form-submit-btn"} title={"Submit"} />
            </form>
          </div>
          <div className="contact-info-container">
            <h3 className="contact-info-heading">Contact Info</h3>
            <p className="contact-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem omnis, placeat exercitationem consequuntur fuga, minima
              eos doloribus voluptas repellendus magnam nemo sed quibusdam neque
              harum veritatis quas. Maxime molestiae non officiis, quisquam
              officia iure.
            </p>
            <div className="contact-medium">
              <img src="" alt="" className="contact-icon" />
              <span className="contact-detail">helo</span>
            </div>
            <div className="contact-medium">
              <img src="" alt="" className="contact-icon" />
              <span className="contact-detail">helo</span>
            </div>
            <div className="contact-medium">
              <img src="" alt="" className="contact-icon" />
              <span className="contact-detail">helo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
