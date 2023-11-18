import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
