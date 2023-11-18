import Button from "./Button";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firbase/config";
import Modal from "./Modal";

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

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModal(true);
    setInvalidEmail(false);
    setPasswordLength(false);

    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const resObj = await Object.create(response);
      if (resObj._tokenResponse.registered === true) {
        errorTitle = "Success";
        errorMessage = "Login successfully";
      }
      setLoading(false);
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
          onClick={isLoading ? console.log() : hideModal}
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
