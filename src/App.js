import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Calendar from './Calender';
import Carousel from './Carousel';
import Search from './Search';
import Cards from './Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/calender" element={<Calendar/>} />
          <Route path="/travel" exact element={<Carousel/>} />
          <Route path="/search" exact element={<Search/>} />
          <Route path="/card" exact element={<Cards/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
