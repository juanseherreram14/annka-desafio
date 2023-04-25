import React,{useState,useEffect} from 'react';
import MyForm from '../Components/UpdateForm.tsx';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import axios from 'axios';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        const fetchdata = async ()=>{
            await axios.get('http://localhost:4000/api/get')
            .then(response => {
              console.log(response.data)
              setPokemons(response.data)
            })
        }
        fetchdata()
    }, [])
  
    return (
      <>
        <h1>Pokedex</h1>
        <ul>
          {pokemons && pokemons.map((pokemon: any) => (
            <li key={pokemon.name}>
              {pokemon.name}
              <button>Delete</button>
              <button> Ver info </button>

            </li>
          ))}
        </ul>
        <MyForm />
      </>
    )
  }