
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"


function App() {
  return (
   <div>
    <Router>
        <>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/signup" element={<Signup />} />

          </Routes>
        </>
      </Router>
   </div>
  );
};

export default App;
