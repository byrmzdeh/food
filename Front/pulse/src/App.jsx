import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Add from './pages/Add';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
import Detail from './pages/Detail';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>



        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App