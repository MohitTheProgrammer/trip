//React import
import { useContext } from "react";

//Image import
import defaultProfile from "../assets/images/default.png";
import userProfile from "../assets/images/userProfile.png";

//App config import
import AuthContext from "../firbase/auth-context";
import { Link } from "react-router-dom";

//CSS import
import "../styles/navigationBar.css";

const NavBar = () => {
  const ctx = useContext(AuthContext);
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/" className="head-link">
            <h1>Trip to</h1>
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-items">
            <Link to="/service">Services</Link>
          </li>
          <li className="nav-items">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-user-profile">
          {ctx.user.displayName ? (
            <Link to={`/user/${ctx.user.uid}`} className="nav-user-profile">
              <img
                className="user-profile-img"
                src={ctx.user.photoURL ? ctx.user.photoURL : userProfile}
                alt="img"
              />
              <span className="user-displayname">{ctx.user.displayName}</span>
            </Link>
          ) : (
            <Link to="/login" className="nav-user-profile">
              <img
                className="user-profile-img"
                src={defaultProfile}
                alt="img"
              />
              <span className="user-displayname">login</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
