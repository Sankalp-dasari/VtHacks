import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Carpooling from "./pages/Carpooling";
import TechSupport from "./pages/TechSupport";
import Tutoring from "./pages/Tutoring";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Carpooling" element={<Carpooling />} />
        <Route path="/TechSupport" element={<TechSupport />} />
        <Route path="/Tutoring" element={<Tutoring />} />
      </Routes>
    </Router>
  );
}

export default App;
