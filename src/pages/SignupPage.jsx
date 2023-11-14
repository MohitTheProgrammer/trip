import Signup from "../component/Signup";

const SignupPage = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "auto",
          boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                       rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        }}
      >
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
