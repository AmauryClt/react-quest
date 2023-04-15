import PropTypes from "prop-types"

function NavBar({ setPokemonIndex, pokemonList }) {
    const handleClickPokemon = index => setPokemonIndex(index)

    return pokemonList.map(
        (pokemon, index) => <button key={index} onClick={() => {
            if (pokemon.name === "pikachu") {
                alert("pika pikachu !!!")
            }
            handleClickPokemon(index)
        }}>{pokemon.name}</button>
    )
}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    ).isRequired,
};

export default NavBar;