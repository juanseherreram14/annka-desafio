import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

    useEffect(() => {
       
        async function fetchdata(){
           
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            setNames(response.data.results);
        }
        fetchdata()
      }, []);
      

      const SubmitPokeButton = async ({name,url})=>{

        try{
          const response = await axios.post('http://localhost:4000/api/add', { name, url });
          console.log(response.data);
        }catch(err){
          console.log(err)
        }
      }

    return (
        <body className='main'>
            <div className='logo'>
                <img src={PdLogo} alt="Pd Logo" />
            </div>
            <div className='SearchBar'>
                <SearchBar></SearchBar>
            </div> 
            <div className='tarjeta-pokemon-container'>
                <TarjetaPokemon className='TarjetaPokemon'
                //imageSrc={bulbasaur}
                number="001" 
                name="Bulbasaur"
                type1="grass" 
                type2="poison"
                />

        <TarjetaPokemon className='TarjetaPokemon'
       // imageSrc={charmander} 
        number="004" 
        name="Charmander"
        type1="fire" 
       
        />

        <TarjetaPokemon className='TarjetaPokemon'
        //imageSrc={squirtle}
        number="007" 
        name="Squirtle"
        type1="water" 
        
        />

<ul>
  {names.map((pokemon, index) => (
   
    <>
   
    <TarjetaPokemon className='TarjetaPokemon'
    name={pokemon.name}key={index}>{pokemon.name}</TarjetaPokemon>
   <button onClick={() => SubmitPokeButton({ name: pokemon.name, url: pokemon.url })}>Guardar</button>
    </>
    
  ))}
</ul>


            </div>

        <div>
            <button className="button" onClick={()=>{navigate('/pokedex')}}>Ir a mi pokedex</button>
        </div>
        </body>
    ) 
}

export default MainPage;
