import React from "react";
import "./index.css"
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
<<<<<<< HEAD
import Home from "./Pages/Home/Home";
=======
import {Toaster} from 'react-hot-toast';
// import Home from "./Pages/Home/Home";
>>>>>>> 3a3be693e83c68373af6ffdade56b00de656b483
// import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>
  );
}

export default App;
