//React import
import { useContext } from "react";

//Image import
import defaultProfile from "../assets/images/default.png";
import userProfile from "../assets/images/userProfile.png";

//App config import
import AuthContext from "../firbase/auth-context";

//CSS import
import "../styles/navigationBar.css";

const NavBar = () => {
  const ctx = useContext(AuthContext);
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <a href="/" className="head-link">
            <h1>Trip to</h1>
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-items">
            <a href="/">Home</a>
          </li>
          <li className="nav-items">
            <a href="/about">About</a>
          </li>
          <li className="nav-items">
            <a href="/service">Services</a>
          </li>
          <li className="nav-items">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav-user-profile">
          {ctx.user.displayName ? (
            <a href={`/user/${ctx.user.uid}`} className="nav-user-profile">
              <img
                className="user-profile-img"
                src={ctx.user.photoURL ? ctx.user.photoURL : userProfile}
                alt="img"
              />
              <span className="user-displayname">{ctx.user.displayName}</span>
            </a>
          ) : (
            <a href="/login" className="nav-user-profile">
              <img
                className="user-profile-img"
                src={defaultProfile}
                alt="img"
              />
              <span className="user-displayname">login</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
