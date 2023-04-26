import React from 'react';
import '../Style/SearchBar.css'

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Buscar Pokémon" className="search-input" />
      <button className="search-button">
        <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="Buscar" className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
