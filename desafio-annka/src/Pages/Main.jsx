import React from 'react';
import SearchBar from '../Components/SearchBar';
import PdLogo from '../Images/PdLogo.png';
import '../Style/Main.css';
import TarjetaPokemon from '../Components/TarjetaPokemon';
import bulbasaur from '../Images/bulbasaur.png';
import charmander from '../Images/charmander.png';
import squirtle from '../Images/Squirtle.png';


const MainPage = () => {
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
                imageSrc={bulbasaur}
                number="001" 
                name="Bulbasaur"
                type1="grass" 
                type2="poison"
                />

        <TarjetaPokemon className='TarjetaPokemon'
        imageSrc={charmander}
        number="004" 
        name="Charmander"
        type1="fire" 
       
        />

        <TarjetaPokemon className='TarjetaPokemon'
        imageSrc={squirtle}
        number="007" 
        name="Squirtle"
        type1="water" 
        
        />

            </div>

        <div>
            <button className="button">Ir a mi pokedex</button>
        </div>
        </body>
    ) 
}

export default MainPage;
