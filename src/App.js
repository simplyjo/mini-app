import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTop } from 'antd';
import {  Home, NoPage, Farming,} from './Pages';
import { Navbar, Footer } from './Components';
import Callback from './Pages/callback';
import Login from './Pages/Login/Login';


const App = () => {
  return (
    <div className=" bg-zinc-950 ">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/farming' element={<Farming/>} />
        <Route path='/callback' element={<Callback/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 