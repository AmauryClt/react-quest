function NavBar({ next, previous, pokemon }) {

    return (
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default NavBar;
