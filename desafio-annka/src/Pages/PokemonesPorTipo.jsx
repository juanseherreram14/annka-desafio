import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import TarjetaPokemon from "../Components/TarjetaPokemon";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Style/PokemonPorTipo.css';




const PokemonesPorTipo = () => {
    const navigate = useNavigate();
  const [pokemones, setPokemones] = useState([]);
  const { tipo } = useParams();
  useEffect(() => {
    const obtenerPokemonesPorTipo = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
      const data = await response.json();
      const promises = data.pokemon.map(async (pokemon) => {
        const response = await fetch(pokemon.pokemon.url);
        const data = await response.json();
        return {
          id: data.id,
          name: data.name,
          types: data.types.map((type) => type.type.name),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        };
      });
      const result = await Promise.all(promises);
      setPokemones(result);
    };
    obtenerPokemonesPorTipo();
  }, [tipo]);

  return (
    <div className="poke-container">
        <div>
            <h1 className="titulo-tipo" > {tipo}</h1>
        </div>
        <div>
                    <button className='btnVolver' onClick={()=>{navigate('/')}}> Volver a inicio</button>
                </div>
      {pokemones.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`}>
        <TarjetaPokemon 
        className="tarjetaTipo"
          key={pokemon.id}
          name={pokemon.name}
          imageSrc={pokemon.image}
          number={pokemon.id}
          type1={pokemon.types[0]}
          type2={pokemon.types[1]}
        />
        </Link>
      ))}
    </div>
  );
};

export default PokemonesPorTipo;
