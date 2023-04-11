import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";


function App() {

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string
    }).isRequired,
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    setPokemonIndex(ancienIndex => ancienIndex + 1);
  }

  const previousPokemon = () => {
    setPokemonIndex(ancienIndex => ancienIndex - 1);
  }

  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <button onClick={previousPokemon} disabled={pokemonIndex === 0}>Précédent</button>
      <button onClick={nextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>Suivant</button>
      <PokemonCard pokemon={pokemon} />

    </div>
  );
}

export default App
