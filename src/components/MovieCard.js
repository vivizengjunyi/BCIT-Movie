import { Link } from 'react-router-dom';
import noImage from '../images/no-image.jpeg';
import { BiRightArrowAlt } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

function MovieCard({ movieObj }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noImage} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                <div className="movieInfoSection">
                    <div className='movieInfo'>
                        <p className='movieTitle'>{movieObj.title}</p>
                        <div className='flex-row'>
                            <p>{movieObj.release_date}</p>
                            <div className='flex-row'>
                                <AiFillStar className='start' />
                                <p>{movieObj.vote_average}</p>
                            </div>
                        </div>
                        <p className='overviewTitle'>Overview:</p>
                        <p className='overview'>{movieObj.overview}</p>
                        <Link to={`/movie/${movieObj.id}`} >More Info<BiRightArrowAlt/></Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MovieCard;
