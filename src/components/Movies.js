import MovieCard from "./MovieCard"

const Movies = ({ movieData }) => {
    return (
        <section className='moviesContainer'>
            { movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} />)}
        </section>
    )
}

export default Movies
