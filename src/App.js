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


function App() {
  return (
    <BrowserRouter>
    <h1>Jak's fitness app</h1>
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
    </BrowserRouter>
  );
}


export default App;
