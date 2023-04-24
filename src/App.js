import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Prediction from "./Pages/Prediction";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
    </div>
  );
}

export default App;
