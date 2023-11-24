//CSS imports
import "../styles/greet.css";

//App config import
import AuthContext from "../firbase/auth-context";

//React import
import { useContext } from "react";

const Greet = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="greet-container">
      <h1 className="greet-message">
        {ctx.user.displayName ? `Wellcome ${ctx.user.displayName}` : "trip to"}
      </h1>
      <p>
        {ctx.user.displayName ? (
          "Welcome to our Traveler's Haven! 🌍✈️ Explore the India with us and embark on unforgettable journeys."
        ) : (
          <span>
            <a href="login">Login for better user experience</a>
          </span>
        )}
      </p>
    </div>
  );
};

export default Greet;
