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
import { Link } from "react-router-dom";

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
          <Link className="edit-btn" to={`/trip/edit-user-profile/${ctx.user.uid}`}>
            Edit
          </Link>
          <Link className="edit-btn" to={`/trip/tickets/${ctx.user.uid}`}>
            Tickets
          </Link>
          <Button
            className={"btn logout-btn"}
            title={"Logout"}
            onclick={ctx.logOut}
          />
        </>
      ) : (
        <Link className="edit-btn" to={`trip/login`}>
          Login
        </Link>
      )}
    </div>
  );
};

export default User;
