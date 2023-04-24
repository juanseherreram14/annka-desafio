import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import Pokedex from './Pages/Pokedex.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;