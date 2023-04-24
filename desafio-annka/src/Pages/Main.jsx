import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokeData } from '../Components/ConsumePokeAPI.tsx';
import SearchBar from '../Components/SearchBar';
import PdLogo from '../Images/PdLogo.png';
import '../Style/Main.css';
import TarjetaPokemon from '../Components/TarjetaPokemon';

const MainPage = () => {
  const AddToPokedexURL = "localhost:5000/api/addToPokeDex"
  const [pokeData, setPokeData] = useState([])
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setNames(response.data.results);
    }
    fetchdata()
  }, []);

  const SubmitPokeButton = ({ name, url }) => {
    axios.post(`${AddToPokedexURL}?name=${name}&url=${url}`)
  }

  return (
    <body className='main'>
      <div className='logo'>
        <img src={PdLogo} alt="Pd Logo" />
      </div>
      <div className='SearchBar'>
        <SearchBar />
      </div>
      <div>
        <button className="button">Ir a mi pokedex</button>
      </div>
      <div className='tarjeta-pokemon-container'>
        <ul>
          {names.map((pokemon, index) => (
            <li key={index}>
              <TarjetaPokemon
                name={pokemon.name}
                type1={pokemon.type}
                imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              >
                {pokemon.name}
              </TarjetaPokemon>
              <button className='btnGuardar' onClick={() => SubmitPokeButton(pokemon)}> Guardar </button>
            </li>
          ))}
        </ul>
      </div>
    </body>
  )
}

export default MainPage;
