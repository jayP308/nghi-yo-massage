
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import './App.css';



function App() {
  return (
   <div className="App">
    <Router>
        <>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/appointment" element={<Appointment/>} />

            <Route path="/contact" element={<Contact/>} />

            <Route path="/services" element={<Services/>} />

          </Routes>
        </>
      </Router>

   </div>
  );
};

export default App;
