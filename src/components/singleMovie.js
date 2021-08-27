

const singleMovie = ({ movieObj }) => {
    return (
        <div>
            <div className='single-movie'>
                <div className='single-movie-backdrop' style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}></div>
                <div className='single-movie-content'>
                    <div className='single-movie-poster'>
                        {movieObj.poster_path == null ? 
                        <img src="/" alt="no poster" />:
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                    }
                    </div>
                    <div className='single-movie-info'>
                        <h2>{movieObj.title}</h2>
                        <div className="flexRow">
                            <p>{movieObj.vote_average}</p>
                            <p>{movieObj.genre_ids}</p>
                            <p>{movieObj.release_date}</p>
                        </div>
                        <p>{movieObj.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default singleMovie
