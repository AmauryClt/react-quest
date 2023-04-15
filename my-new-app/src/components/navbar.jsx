import PropTypes from 'prop-types';

function NavBar({ next, previous, currentPokemon }) {
    NavBar.propTypes = {
        next: PropTypes.func.isRequired,
        previous: PropTypes.func.isRequired,
        currentPokemon: PropTypes.string.isRequired,
    };

    useEffect(() => {
        if (currentPokemon === 'pikachu') {
            alert('pika pikachu !!!');
        }
    }, [currentPokemon]);

    return (
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default NavBar;