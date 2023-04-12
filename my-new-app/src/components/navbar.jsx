

function NavBar({ nextPokemon, previousPokemon }) {

    return (
        <div>
            <button onClick={previousPokemon}>Previous</button>
            <button onClick={nextPokemon}>Next</button>
        </div>
    )
}

export default NavBar;





// disabled={pokemonIndex === pokemonList.length - 1}

// disabled={pokemonIndex === 0}