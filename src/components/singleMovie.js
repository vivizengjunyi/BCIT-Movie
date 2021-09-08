import { AiFillStar } from 'react-icons/ai';

const SingleMovie = ({ movieObj }) => {
    return (
        <div>
            <div className='single-movie'>
                <div className='single-movie-backdrop' style={{ backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})` }}></div>
                <div className='single-movie-content'>
                    <div className='single-movie-poster'>
                        {movieObj.poster_path == null ?
                            <img src="/" alt="no poster" /> :
                            <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                        }
                    </div>
                   
                    <div className='single-movie-info'>
                        <p className='title'>{movieObj.title}</p>
                        <div className='line'></div>
                        <div className="flexRow">
                            <div className='stick'>
                                <AiFillStar className='start' />
                                <p>{movieObj.vote_average}</p>
                            </div>
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

export default SingleMovie
