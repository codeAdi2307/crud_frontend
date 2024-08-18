import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskManagement from './components/Task.js';
import NavBar from './components/Navbar.js';
import './App.css';
import SignIn from "./login/SignIn.js"
import SignUp from "./login/SignUp.js"


function App() {
  return (
    <Router>

      <NavBar fixed="top"/>
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/task" element={<TaskManagement />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
