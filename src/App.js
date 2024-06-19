import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import Createleahue from './component/Createleahue'
// import Findleague from './component/Findleague'
import Login from './component/Login'
import More from './component/More'
import Pointtable from './component/Pointtable'
import Reg from './component/Reg'
import Scoreboard from './component/Scoreboard';
import Fixture from './component/Fixture';
import Err from './component/Err';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/createleahue" element={<Createleahue />} />
    </Routes>
    <Routes>
      <Route path="/scoreboard" element={<Scoreboard />} />
    </Routes>
    <Routes>
      <Route path="/pointtable" element={<Pointtable />} />
    </Routes>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
    <Routes>
      <Route path="/reg" element={<Reg />} />
    </Routes>
    <Routes>
      <Route path="/more" element={<More />} />
    </Routes>
   
    <Routes>
      <Route element={<Err />} />
    </Routes>
    
    </>
    
  )
}

export default App
