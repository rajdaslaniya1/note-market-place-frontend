import React from "react";
import "./css";

import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Login />
    </>
  );
}

export default App;
