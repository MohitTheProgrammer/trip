import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./component/NavigationBar";
import AuthContext from "./firbase/auth-context";
import { app } from "./firbase/config";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EditProfile from "./pages/EditProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";

const auth = getAuth(app);

function App() {
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
    location.reload();
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user/:uid" element={<UserPage />} />
            <Route path="edit-user-profile/:uid" element={<EditProfile />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
