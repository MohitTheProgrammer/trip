import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useRef, useState } from "react";
import Loading from "../assets/images/loading.gif";
import { app } from "../firbase/config";
import "../styles/signup.css";
import Button from "./Button";
import Modal from "./Modal";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
let errorMessage = "";
let errorTitle = "";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [shortPassword, setPasswordLength] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);

  const signupWithEmail = async (e) => {
    e.preventDefault();
    setInvalidEmail(false);
    setPasswordLength(false);

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.endsWith(".") ||
      email.endsWith("@")
    ) {
      setInvalidEmail(true);
      return;
    }

    if (password.length < 6) {
      setPasswordLength(true);
      return;
    }

    try {
      setModal(true);
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      let resObj = Object.create(response);
      if (resObj.user.email === email.trim()) {
        errorTitle = "Success";
        errorMessage = `Signup successfully with => ${email}`;
      }
    } catch (err) {
      setLoading(false);
      const errObj = Object.create(err);
      errorMessage = errObj.code;
      errorTitle = errObj.name;
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider).then((response) => console.log(response));
  };
  const hideModal = () => setModal(false);

  return (
    <>
      {showModal && (
        <Modal onClick={hideModal}>
          {isLoading ? (
            <img src={Loading} className="loading-img" alt="Loading..." />
          ) : (
            <>
              <h2 className={errorTitle === "Success" ? "success" : "error"}>
                {errorTitle}
              </h2>
              <p className="modal-message">{errorMessage}</p>
            </>
          )}
        </Modal>
      )}
      <div className="card-lg">
        <div className={"container"}>
          <h1>Sign up</h1>
          <p>Please signup to access all services</p>
          <form onSubmit={signupWithEmail} className={"signup_form"}>
            <div className={"input_control"}>
              <input
                type="email"
                required
                ref={emailRef}
                placeholder="Email"
                className={"signup_input"}
              />
              {invalidEmail && (
                <p style={{ color: "red" }}>Please enter valid email</p>
              )}
              <input
                type="password"
                required
                ref={passwordRef}
                placeholder="Password"
                className={"signup_input"}
              />
              {shortPassword && (
                <p style={{ color: "red" }}>
                  Password must be 6 character long
                </p>
              )}
            </div>
            <div>
              <p className={"login_link_line"}>
                Already a member?
                <span>
                  <a href="" className={"link"}>
                    {" "}
                    login
                  </a>
                </span>
              </p>
            </div>
            <Button className={"btn"} title={"Submit"} />
          </form>
          <div className={"hr"}>
            <div className={"line"}></div>
            <div className={"or"}>OR</div>
            <div className={"line"}></div>
          </div>
          <Button
            onclick={signupWithGoogle}
            className={"btn google_btn"}
            title={"Google"}
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
