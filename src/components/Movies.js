import MovieCard from "./MovieCard"

const Movies = ({ movieData }) => {
    return (
        <section className='movies-container'>
            { movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} showDetail/>)}
        </section>
    )
}

export default Movies
