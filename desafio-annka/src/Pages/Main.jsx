import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PokeData } from '../Components/ConsumePokeAPI.tsx';
import SearchBar from '../Components/SearchBar';
import PdLogo from '../Images/PdLogo.png';
import '../Style/Main.css';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import { Link } from 'react-router-dom';




const MainPage = () => {
  const AddToPokedexURL = "localhost:5000/api/addToPokeDex"
  const [pokeData, setPokeData] = useState([])
  const [names, setNames] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchdata() {
  
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokemonList = response.data.results;
      const newData = await Promise.all(pokemonList.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        const types = data.types.map(type => type.type.name);
        return { name: pokemon.name, number: data.id, types: types };
      }));
      setPokeData(newData);
      setNames(pokemonList);
    }
    fetchdata();
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
            <button className="button" onClick={()=>{navigate('/pokedex')}}>Ir a mi pokedex</button>
        </div>
      <div className='tarjeta-pokemon-container'>
        <ul className='listaPokemones'>
          {pokeData.map((pokemon, index) => (
            <li key={index}>
               <Link to={`/pokemon/${index + 1}`}>
              
                  <TarjetaPokemon
                    name={pokemon.name}
                    type1={pokemon.types[0]}
                    type2={pokemon.types[1]}
                    imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
                    number={pokemon.number}
                  >
                    {pokemon.name}
                  </TarjetaPokemon>
            </Link>
             
              <button className='btnGuardar' onClick={() => SubmitPokeButton({ name: pokemon.name, url: pokemon.url })}>Guardar</button>
            </li>
          ))}
        </ul>
      </div>
    </body>
  )
}

export default MainPage;
