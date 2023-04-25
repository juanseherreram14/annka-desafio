import React,{useState,useEffect} from 'react';
import MyForm from '../Components/UpdateForm.tsx';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import axios from 'axios';
import PdLogo from '../Images/PdLogo.png';

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
       <div className='logo'>
        <img src={PdLogo} alt="Pd Logo" />
      </div>
       
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