import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MainPage from './Pages/Main';
import Pokedex from './Pages/Pokedex.tsx';
import Detalle from './Pages/PokemonDetalle';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detalle" element={<Detalle />} />
      <Route  path="/pokemon/:id" element={<Detalle />} />
      </Routes>
      
    </div>
  );
}

export default App;