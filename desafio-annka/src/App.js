import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MainPage from './Pages/Main';
import Pokedex from './Pages/Pokedex.tsx';
import Detalle from './Pages/PokemonDetalle';
import Tipos from './Pages/PokemonesPorTipo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route  path="/pokemon/:id" element={<Detalle />} />
        <Route  path="/tipo/:tipo" element={<Tipos />} />
      </Routes>
      
    </div>
  );
}

export default App;