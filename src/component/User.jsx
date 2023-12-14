//React import
import { useContext } from "react";

//Image import
import defaultProfile from "../assets/images/userProfile.png";

//Component import
import Button from "../component/Button";

//App config import
import AuthContext from "../firbase/auth-context";

//CSS import
import "../styles/user.css";

const User = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="user-info-card">
      <div className="profile-page-img">
        <img
          src={ctx.user.photoURL ? ctx.user.photoURL : defaultProfile}
          alt="img"
          className="profile-img-url"
        />
      </div>
      <div className="user-info">
        <p className="display-user-cred">
          <span className="user-cred-indi">Name: </span> {ctx.user.displayName}
        </p>
        <p className="display-user-cred">
          <span className="user-cred-indi">Email: </span> {ctx.user.email}
        </p>
        {/* <p className="display-user-cred">
          <span className="user-cred-indi">Phone Number: </span>
          {ctx.user.phoneNumber
            ? ctx.user.phoneNumber
            : "add phone number"}{" "}
        </p> */}
      </div>
      {ctx.user.email ? (
        <>
          <a className="edit-btn" href={`/edit-user-profile/${ctx.user.uid}`}>
            Edit
          </a>
          <Button
            className={"btn logout-btn"}
            title={"Logout"}
            onclick={ctx.logOut}
          />
        </>
      ) : (
        <a className="edit-btn" href={`/login`}>
          Login
        </a>
      )}
    </div>
  );
};

export default User;
