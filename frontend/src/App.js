import { Route, Routes } from "react-router";
import "./App.css";
import AddProject from "./components/AddProject/AddProject";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import ResponsiveAppBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/addproject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
