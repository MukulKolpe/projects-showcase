import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AddProject from "./components/AddProject/AddProject";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import NavigationBar from "./components/Nav";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/addproject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
