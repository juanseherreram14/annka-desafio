import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Style/PokemonDetalle.css';
import { Link } from 'react-router-dom';

const PokemonDetalle = () => {
    const AddToPokedexURL = "localhost:5000/api/addToPokeDex";
    const navigate = useNavigate();
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemonData(response.data);
      
      const typesResponse = await axios.all(response.data.types.map(type => axios.get(type.type.url)));
      setPokemonTypes(typesResponse.map(response => response.data.name));

    }
    fetchData();
  }, [id]);

  const SubmitPokeButton = ({ name, url }) => {
    axios.post(`${AddToPokedexURL}?name=${name}&url=${url}`)
  }


  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    height,
    weight,
    abilities,
    stats
  } = pokemonData;

  const speedStat = stats.find(stat => stat.stat.name === 'speed').base_stat;
  const defenseStat = stats.find(stat => stat.stat.name === 'defense').base_stat;
  const attackStat = stats.find(stat => stat.stat.name === 'attack').base_stat;
  const hpStat = stats.find(stat => stat.stat.name === 'hp').base_stat;


  return (
    <div className="pokemon-details">
      <h2 className="pokemon-name">{name}</h2>
      <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <div className="pokemon-stats">
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Altura:</div>
          <div className="pokemon-stat-value">{height / 10} m</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Peso:</div>
          <div className="pokemon-stat-value">{weight / 10} kg</div>
        </div>

        <div className="pokemon-stat">
        <div className="pokemon-stat-label">Tipos:</div>
       
        <ul className="pokemon-type-list">
            {pokemonTypes.map(type => (
            <li key={type} className={`card-type ${type}`}  onClick={()=>{navigate(`/tipo/${type}`)}}>
               
                <button className='btnTipo' onClick={() => handleTypeClick(type)}>
                {type}
                </button>
            </li>
    ))}
  </ul>
 
</div>

        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Habilidades:</div>
          <div className="pokemon-stat-value">{abilities.map((ability) => ability.ability.name).join(", ")}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Estadísticas:</div>
          <div className="pokemon-stat-label">Velocidad:</div>
          <div className="pokemon-stat-value">{speedStat}</div>
          <div className="pokemon-stat-label">Defensa:</div>
          <div className="pokemon-stat-value">{defenseStat}</div>
          <div className="pokemon-stat-label">Ataque:</div>
          <div className="pokemon-stat-value">{attackStat}</div>
        </div>

        <div className="pokemon-stat">
  <div className="pokemon-stat-label">Puntos de Salud (HP):</div>
  <div className="pokemon-stat-value">{hpStat}</div>
</div>

                <div>
                    <button className='btnVolver' onClick={()=>{navigate('/')}}> Volver</button>
                </div>
                <div>
                    <button className='btnGuardar' onClick={() => SubmitPokeButton({ name, url: name.url })}> Guardar en mi pokedex</button>
                </div>
                <div>
                    <button className='irPokedex' onClick={()=>{navigate('/pokedex')}}> Ir a mi pokedex</button>
                </div>
      </div>
    </div>
  );
};

export default PokemonDetalle;
