import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './components/Search';
import Map from './components/Map';
import Phone from './components/Phone';
import Register from './components/Register';

function App() {
 

  return (
    <div>
       <Navbar/>
   <Routes>
    <Route path='search' element={<Search/>}></Route>
    <Route path='map'element={<Map/>}></Route>
    <Route path='phone' element={<Phone/>}></Route>
    <Route path='register/exit' element={<Register/>}></Route>
    </Routes>
    </div>
  )
}

export default App
