import React,{useState,useEffect} from 'react';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import axios from 'axios';

export default function Pokedex() {
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        // cambiar URL 
        axios.get('https://localhost:4000/api/get')
        .then(response=>{
            console.log(response.data.results)
            setPokemons(response.data.results)
        })
    },[])
    return(
       <>
       <h1>
        Pokedex
       </h1>
       <ul>
        {pokemons.map((pokemon:any)=>{
            return(
                <li key={pokemon.name}>
                    {pokemon.name}
                    <button>
                     Delete  
                    </button>
                     Ver info
                    <button>
                    Update 
                    </button>
                </li>
            )
        })
        }
       </ul>
       </>
    )
}