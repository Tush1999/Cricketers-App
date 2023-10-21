import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CricketersList from './components/list';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CricketersList />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
