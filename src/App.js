
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

            <Route path="/" component={<Home/>} />

            <Route path="/appointment" component={<Appointment/>} />

            <Route path="/contact" component={<Contact/>} />

            <Route path="/services" component={<Services/>} />

          </Routes>
        </>
      </Router>

   </div>
  );
};

export default App;
