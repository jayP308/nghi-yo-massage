
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact"


function App() {
  return (
   <div style={{  background: "linear-gradient(to top, #e5e5e5, #0a5d00, #e5e5e5)", height: "1250px"}}>
    <Router>
        <>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/contact" element={<Contact/>} />

            <Route path="/services" element={<Services />} />

          </Routes>
        </>
      </Router>
   </div>
  );
};

export default App;
