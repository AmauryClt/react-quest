function NavBar({ next, previous, pokemon }) {

    useEffect(() => {
        if (pokemon.name === "pikachu") {
            alert("pika pikachu !!!")
        }
    }, [pokemon])

    return (
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default NavBar;
