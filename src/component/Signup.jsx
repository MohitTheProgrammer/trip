// Firebase imports
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//App config import
import { app } from "../firbase/config";

//Css import
import "../styles/signup.css";

//React imports
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Component imports
import Button from "./Button";
import Modal from "./Modal";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
let errorMessage = "";
let errorTitle = "";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [shortPassword, setPasswordLength] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const navigate = useNavigate();

  const signupWithEmail = async (e) => {
    e.preventDefault();
    setInvalidEmail(false);
    setPasswordLength(false);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const displayName = nameRef.current.value;

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
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName });
      setLoading(false);
      let resObj = Object.create(res);
      if (resObj.user.email === email.trim()) {
        errorTitle = "Success";
        errorMessage = `Signup successfully with => ${email}`;
      }
      navigate("/login");
    } catch (err) {
      setLoading(false);
      console.log(err);
      const errObj = Object.create(err);
      errorMessage = errObj.code;
      errorTitle = errObj.name;
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => navigate("/"));
  };
  const hideModal = () => setModal(false);
  return (
    <>
      {showModal && (
        <Modal
          onClick={isLoading ? console.log() : hideModal}
          loading={isLoading}
          errorClassName={errorTitle === "Success" ? "success" : "error"}
          title={errorTitle}
          message={errorMessage}
        />
      )}
      <div className="card-lg">
        <div className={"container"}>
          <h1>Sign up</h1>
          <p>Please signup to access all services</p>
          <form onSubmit={signupWithEmail} className={"signup_form"}>
            <div className={"input_control"}>
              <input
                type="text"
                required
                ref={nameRef}
                placeholder="Name"
                className={"signup_input"}
              />
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
                  <Link to="/login" className={"link"}>
                    {" "}
                    login
                  </Link>
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
