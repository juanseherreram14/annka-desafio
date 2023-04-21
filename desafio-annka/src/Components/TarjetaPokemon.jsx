import React from "react";
import "../Style/TarjetaPokemon.css";


const TarjetaPokemon = ({ imageSrc, name, number, type1, type2 }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="pokemon" />
      <div className="card-content">
        <p className="card-number">#{number}</p>
        <p className="card-number">{name}</p>
        <div className="card-types">
          <div className={`card-type ${type1}`}>{type1}</div>
          {type2 && <div className={`card-type ${type2}`}>{type2}</div>}
        </div>
      </div>
    </div>
  );
};

export default TarjetaPokemon;
