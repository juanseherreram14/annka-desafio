import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PokeData } from '../Components/ConsumePokeAPI.tsx';
import SearchBar from '../Components/SearchBar';
import PdLogo from '../Images/PdLogo.png';
import '../Style/Main.css';
import '../Style/SearchBar.css'
import TarjetaPokemon from '../Components/TarjetaPokemon';
import { Link } from 'react-router-dom';




const MainPage = () => {
  const AddToPokedexURL = "http://localhost:4000/api/add"
  const [pokeData, setPokeData] = useState([])
  const [names, setNames] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const pokemonList = response.data.results;
  
      const newData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const { data } = await axios.get(pokemon.url);
          const types = data.types.map((type) => type.type.name);
          return { name: pokemon.name, number: data.id, types: types, url: pokemon.url };
        })
      );
  
      setPokeData(newData);
      setNames(pokemonList);
    }
  
    fetchData();
  }, []);

  const handleSearchClick = () => {
    if (searchTerm) {

      if (searchTerm.length === 1 || searchTerm.length === 2) {
        fetchDataByNumber(searchTerm);
      } else {
        fetchDataByName(searchTerm);
      }
    }
  };


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  async function fetchDataByNumber(pokemonName) {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const types = data.types.map((type) => type.type.name);
      const newData = { name: data.name, number: data.id, types: types, url: `https://pokeapi.co/api/v2/pokemon/${data.id}` };
      setPokeData([newData]);
      setNames([{ name: data.name, url: `https://pokeapi.co/api/v2/pokemon/${data.name}` }]);
    } catch (error) {
      console.error(error);
    }
  }



  async function fetchDataByName(pokemonName) {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const types = data.types.map((type) => type.type.name);
      const newData = { name: data.name, number: data.id, types: types, url: `https://pokeapi.co/api/v2/pokemon/${data.id}` };
      setPokeData([newData]);
      setNames([{ name: data.name, url: `https://pokeapi.co/api/v2/pokemon/${data.name}   ` }]);
    } catch (error) {
      console.error(error);
    }
  }

  

  const SubmitPokeButton = async (name, url) => {
    try {
      await axios.post(`${AddToPokedexURL}`, { name, url });
      alert(`${name} was added to your Pokedex!`);
    } catch (error) {
      console.error(error);
      alert('There was an error adding the Pokemon to your Pokedex.');
    }
  }

 
  
  return (
    <body className='main'>
      <div className='logo'>
        <img src={PdLogo} alt="Pd Logo" />
      </div>
      <div className='SearchBar'>
        <input   className="search-input"  type="text" value={searchTerm} onChange={handleInputChange} />
      <button  className="search-button" onClick={handleSearchClick}> <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="Buscar" className="search-icon" /></button>
        <div>
    
    </div>
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
             
            <button className='btnGuardar' onClick={() => SubmitPokeButton(pokemon.name, pokemon.url)}>Guardar</button>
            </li>
          ))}
        </ul>
      </div>
    </body>
  )
}

export default MainPage;
