
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact"


function App() {
  return (
   <div>
    <Router>
        <>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/contact" element={<Contact/>} />

            <Route path="/login" element={<Login />} />

            <Route path="/services" element={<Services />} />

          </Routes>
        </>
      </Router>
   </div>
  );
};

export default App;
