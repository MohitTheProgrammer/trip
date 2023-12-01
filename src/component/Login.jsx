//Firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firbase/config";

//Components import
import Button from "./Button";
import Modal from "./Modal";

//React imports
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Css import
import "../styles/signup.css";

const auth = getAuth(app);
let errorMessage = "";
let errorTitle = "";

const Login = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [shortPassword, setPasswordLength] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModal(true);
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
      const response = await signInWithEmailAndPassword(auth, email, password);
      const resObj = await Object.create(response);
      if (resObj._tokenResponse.registered === true) {
        errorTitle = "Success";
        errorMessage = "Login successfully";
      }
      console.log(response.user);
      setLoading(false);
      navigate("/")
    } catch (err) {
      const errorObj = Object.create(err);
      console.log(errorObj);
      if (errorObj.name === "FirebaseError") {
        errorTitle = errorObj.name;
        errorMessage = errorObj.code;
      }
      setLoading(false);
    }
  };

  const hideModal = () => setModal(false);

  return (
    <>
      {showModal && (
        <Modal
          onClick={hideModal}
          loading={isLoading}
          errorClassName={errorTitle === "Success" ? "success" : "error"}
          title={errorTitle}
          message={errorMessage}
        />
      )}

      <div className="card-lg">
        <div className={"container"}>
          <h1>Login</h1>
          <p>Please login to use services</p>
          <form onSubmit={loginUser} className={"signup_form"}>
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
                Not have an account?
                <span>
                  <Link to="/signup" className={"link"}>
                    {" "}
                    signup
                  </Link>
                </span>
              </p>
            </div>
            <Button className={"btn"} title={"Login"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
