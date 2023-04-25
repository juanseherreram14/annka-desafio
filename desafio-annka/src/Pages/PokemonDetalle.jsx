import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetalle = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  console.log(id)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setPokemonData(response.data);
    }
    fetchData();
  }, [id]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    height,
    weight,
    types,
    abilities,
    stats
  } = pokemonData;

  const statsData = stats.reduce((acc, curr) => {
    acc[curr.stat.name] = curr.base_stat;
    return acc;
  }, {});

  const MAX_STAT_VALUE = 255;
  const statBars = Object.keys(statsData).map((statName) => {
    const statValue = statsData[statName];
    const statPercentage = (statValue / MAX_STAT_VALUE) * 100;

    return (
      <div key={statName}>
        <div className="stat-label">{statName}</div>
        <div className="stat-bar">
          <div className="stat-bar-filled" style={{ width: `${statPercentage}%` }}></div>
        </div>
      </div>
    );
  });

  return (
    <div className="pokemon-details">
      <h2 className="pokemon-name">{name}</h2>
      <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <div className="pokemon-stats">
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Height:</div>
          <div className="pokemon-stat-value">{height / 10} m</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Weight:</div>
          <div className="pokemon-stat-value">{weight / 10} kg</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Types:</div>
          <div className="pokemon-stat-value">{types.map((type) => type.type.name).join(", ")}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Abilities:</div>
          <div className="pokemon-stat-value">{abilities.map((ability) => ability.ability.name).join(", ")}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Stats:</div>
          <div className="pokemon-stat-value">{statBars}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetalle;
