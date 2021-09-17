import { useEffect, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import globalAppState from '../store/globalAppState';


const SingleMovie = ({ movieObj }) => {

    function getIsFav(arr, id) {
        if (arr.length === 0) {
            return false;
        }
        // Checks whether the object is favourited
        return arr.some((item) => item.id === id);
    }

    const { getFavs, actions } = globalAppState;
    const [favs, setFavs] = useState([])
    useEffect(() => {
        setFavs(getFavs());
    }, []);
    const handleSetFavs = (movieObj, isFave) => {
        const favs = actions[isFave ? 'removeFav' : 'addFav'](movieObj);
        setFavs(favs);
    }
    return (
        <div>
            <div className='single-movie'>
                <div className='single-movie-content'>
                    <div className='single-movie-poster'>
                        {movieObj.poster_path == null ?
                            <img src="/" alt="no poster" /> :
                            <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                        }
                    </div>
                    <div className='single-movie-info'>
                        <div className='flexRow'>
                        <p className='title'>{movieObj.title}</p>
                        {getIsFav(favs, movieObj.id) ?
                            <BsFillHeartFill className='icon-fav red' onClick={() => handleSetFavs(movieObj, true)} /> :
                            <BsHeart className='icon-fav ' onClick={() => handleSetFavs(movieObj, false)} />}
                        </div>
                        
                        <div className='line'></div>
                        <div className="flexRow">
                            <div className='stick'>
                                <AiFillStar className='start' />
                                <p>{movieObj.vote_average}</p>
                            </div>
                            <p>{movieObj.genres.id}</p>
                            <p>{movieObj.release_date}</p>
                        </div>
                        <p>{movieObj.overview}</p>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie
