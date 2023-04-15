import { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";
import Navbar from './components/navbar';


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

  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },
    []
  );


  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(ancienIndex => ancienIndex + 1);
    }
  }

  const previousPokemon = () => {
    if (pokemonIndex > 0)
      setPokemonIndex(ancienIndex => ancienIndex - 1);
  }

  const pokemon = pokemonList[pokemonIndex];


  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <Navbar next={nextPokemon} previous={previousPokemon} />
    </div>
  );
}

export default App
