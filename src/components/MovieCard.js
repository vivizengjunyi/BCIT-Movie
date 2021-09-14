import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import noImage from '../images/no-image.jpeg';
import globalAppState from '../store/globalAppState';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
function getIsFav(arr, id) {
    if (arr.length === 0) {
        return false;
    }
    // Checks whether the object is favourited
    return arr.some((item) => item.id === id);
}
function MovieCard({ movieObj, onUpdate, from }) {
    const { getFavs, actions } = globalAppState;
    const [favs, setFavs] = useState([])
    useEffect(() => {
        setFavs(getFavs());
    }, []);
    const handleSetFavs = (movieObj, isFave) => {
        const favs = actions[isFave ? 'removeFav' : 'addFav'](movieObj);
        setFavs(favs);
        onUpdate && onUpdate();
    }
    return (
        <div className="movie-card">
            {getIsFav(favs, movieObj.id) ? 
                <BsFillHeartFill className='float-right' onClick={() => handleSetFavs(movieObj, true)} /> :
                <BsHeart className='float-right' onClick={() => handleSetFavs(movieObj, false)}/>}
            <div className="movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noImage} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                {from === 'home' && 
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
                        <Link to={`/movie/${movieObj.id}`} >More Info<BiRightArrowAlt /></Link>
                    </div>

                </div>
                }   
            </div>

        </div>
    )
}

export default MovieCard;
