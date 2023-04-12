



function navBar(props) {

    const nextPokemon = () => {
        setPokemonIndex(ancienIndex => ancienIndex + 1);
    }
    const previousPokemon = () => {
        setPokemonIndex(ancienIndex => ancienIndex - 1);
    }

    return (
        <div>
            <button onClick={previousPokemon} disabled={pokemonIndex === 0}>Précédent</button>
            <button onClick={nextPokemon} disabled={pokemonIndex === pokemonList.length - 1}>Suivant</button>
        </div>
    )
}

export default navBar;

