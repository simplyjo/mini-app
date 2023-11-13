import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTop } from 'antd';
import {  Home, NoPage, Farming,} from './Pages';
import { Navbar, Footer } from './Components';
import Callback from './Pages/callback';


const App = () => {

  const user = localStorage.getItem('user')

  return (
    <div className=" bg-zinc-950 ">
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/farming' element={<Farming user={user}/>} />
        <Route path="/callback" element={<Callback />}></Route>
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 