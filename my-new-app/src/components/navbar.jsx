

function NavBar({ next, previous }) {

    return (
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default NavBar;





// disabled={pokemonIndex === pokemonList.length - 1}

// disabled={pokemonIndex === 0}