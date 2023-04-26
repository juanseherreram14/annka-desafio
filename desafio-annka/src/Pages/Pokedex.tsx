import React, { useState, useEffect } from "react";
import MyForm from '../Components/UpdateForm.tsx';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import axios from 'axios';
import PdLogo from '../Images/PdLogo.png';
import { useNavigate } from 'react-router-dom';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/api/get');
      console.log(response.data);
      setPokemons(response.data);
    };
    fetchData();
  }, []);

  const deleteElementNumber = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/delete/${id.toString()}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemonNumber = (url: string) => {
    const urlEnd = url.substring(url.lastIndexOf("/") + 1);
    const pokemonNumber = Number(urlEnd);
    
    // Check if pokemonNumber is 0 or null
    if (!pokemonNumber || pokemonNumber === 0) {
      const urlStart = url.substring(0, url.lastIndexOf("/"));
      const newUrlEnd = urlStart.substring(urlStart.lastIndexOf("/") + 1);
      return Number(newUrlEnd);
    }
  
    return pokemonNumber;
  };

  return (
    <>
      <div className='logo'>
        <img src={PdLogo} alt="Pd Logo" />
      </div>

      <ul>
        {pokemons && pokemons.map((pokemon: any) => (
          <li key={pokemon.name}>
            <div className="pokemon-details">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonNumber(pokemon.url)}.png`} alt={pokemon.name} />
      </div>
            {pokemon.name}
    
            <p>Pokemon number: {getPokemonNumber(pokemon.url)}</p>
            <button className='btnGuardar' onClick={()=>{deleteElementNumber(getPokemonNumber(pokemon.url))}}>Delete</button>
          </li>
        ))}
      </ul>

      <MyForm />
      <div>
        <button className='btnVolver' onClick={()=>{navigate('/')}}> Volver</button>
      </div>
    </>
  );
}