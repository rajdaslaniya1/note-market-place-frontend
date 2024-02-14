import React from "react";
import "./css";

import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
