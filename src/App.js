import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from 'react';
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/study-notion" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/study-notion/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/study-notion/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/study-notion/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
