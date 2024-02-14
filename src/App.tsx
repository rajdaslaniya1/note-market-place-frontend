import React from "react";
import "./css";

import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import SearchNotes from "pages/SearchNotes";
import FAQ from "pages/FAQ";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-notes" element={<SearchNotes />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
