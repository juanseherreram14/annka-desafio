import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  abilities: string[];

}

async function getPokemon(nameOrId: string | number): Promise<Pokemon> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  const response = await axios.get(url);
  const { id, name, abilities, sprites } = response.data;

  const pokemon: Pokemon = {
    id,
    name,
    image: sprites.front_default,
    abilities: abilities.map((ability: any) => ability.ability.name),

  };

  return pokemon;
}
