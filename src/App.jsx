import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import OneVehicleCard from "./component/OneVehicleCard";
import AuthContext from "./firbase/auth-context";
import { app } from "./firbase/config";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EditProfile from "./pages/EditProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import TicketPage from "./pages/TicketPage";
import ShowTicketPage from "./pages/ShowTicketPage";

const auth = getAuth(app);

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (getUser) => {
      if (getUser) {
        setUser(getUser);
      } else {
        ("nobody logged in");
      }
    });
  }, []);

  const logOut = async () => {
    await signOut(auth);
    navigate("trip/")
    location.reload()
    
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLogin: null,
          user,
          logOut,
        }}
      >
        <NavigationBar />
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="trip/" element={<HomePage />} />
            <Route path="trip/signup" element={<SignupPage />} />
            <Route path="trip/login" element={<LoginPage />} />
            <Route path="trip/user/:uid" element={<UserPage />} />
            <Route path="trip/edit-user-profile/:uid" element={<EditProfile />} />
            <Route path="trip/contact" element={<ContactPage />} />
            <Route path="trip/about" element={<AboutPage />} />
            <Route path="trip/service" element={<ServicePage />} />
            <Route path="trip/vehicle/:type/:id" element={<OneVehicleCard />} />
            <Route path="trip/tickets/:uid" element={<TicketPage />} />
            <Route path="trip/ticket/:uid/:ticketId" element={<ShowTicketPage />} />
          </Routes>
        {/* </BrowserRouter> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
