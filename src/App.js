import React from 'react'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Createleague from './Pages/Createleague'
// import Findleague from './component/Findleague'
import Login from './Pages/Login'
import More from './Pages/More'
import Pointtable from './Pages/Pointtable'
import Reg from './Pages/Reg'
import Scoreboard from './Pages/Scoreboard';
import Fixture from './Pages/Fixture';
import Err from './Pages/Err';
import Tournaments from './Pages/Tournaments';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create league" element={<Createleague />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
      <Route path="/pointtable" element={<Pointtable />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/more" element={<More />} />
      <Route path='*' element={<Err />} />
      <Route path='/tournaments' element={<Tournaments/>} />
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
