import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Monday } from './weekdays/Monday';
import { Tuesday } from './weekdays/Tuesday';
import { Wednesday } from './weekdays/Wednesday';
import { Thursday } from './weekdays/Thursday';
import { Friday } from './weekdays/Friday';
import { Saturday } from './weekdays/Saturday';
import { Sunday } from './weekdays/Sunday';
import { Weekdays } from './weekdays/Weekdays';
import './App.css';
import { NotFound } from './weekdays/NotFound';
import { Footer } from './Footer';
import logo from './logo.png'


function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <img className="logo" src={logo} alt="Jak's fitness app logo" height={100} />
      </div>

        <Routes>
          <Route path='/' element={<Weekdays/>} />
          <Route path='/monday' element={<Monday/>} />
          <Route path='/tuesday' element={<Tuesday/>} />
          <Route path='/wednesday' element={<Wednesday/>} />
          <Route path='/thursday' element={<Thursday/>} />
          <Route path='/friday' element={<Friday/>} />
          <Route path='/saturday' element={<Saturday/>} />
          <Route path='/sunday' element={<Sunday/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}


export default App;
