import Signup from "../component/Signup";
import "./pagesStyle/pages.css"

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="card-lg">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
