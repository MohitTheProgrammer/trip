import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { 
    path: "sign-up", 
    element: <SignupPage /> 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
