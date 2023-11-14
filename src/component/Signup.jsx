import { useRef, useState } from "react";
import Button from "./Button";
import "../styles/signup.css";
import { app } from "../firbase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [shortPassword, setPasswordLength] = useState(false);

  const signupWithEmail = (e) => {
    e.preventDefault();
    setInvalidEmail(false);
    setPasswordLength(false);

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    if (!email.includes("@") || !email.includes(".")) {
      setInvalidEmail(true);
      return;
    }

    if (password.length < 6) {
      setPasswordLength(true);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => console.log(response))
      .catch((err) => console.table(err));

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider).then((response) => console.log(response));
  };

  return (
    <div className={"container"}>
      <h1>Sign up</h1>
      <p>Please signup to access all services</p>
      <form onSubmit={signupWithEmail} className={"signup_form"}>
        <div className={"input_control"}>
          <input
            type="text"
            required
            ref={emailRef}
            placeholder="Email"
            className={"signup_input"}
          />
          {invalidEmail && (
            <p style={{ color: "red" }}>Please enter valid email</p>
          )}
          <input
            type="text"
            required
            ref={passwordRef}
            placeholder="Password"
            className={"signup_input"}
          />
          {shortPassword && (
            <p style={{ color: "red" }}>Password must be 6 character long</p>
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
  );
};

export default Signup;
