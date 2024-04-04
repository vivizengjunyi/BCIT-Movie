import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import globalAppState from '../store/globalAppState';
import MovieCard from "../components/MovieCard";
import { BsFillHeartFill } from 'react-icons/bs';

const PageFavs = () => {
    const { getFavs } = globalAppState;
    const [favs, setFavs] = useState([])
    useEffect(() => {
        setFavs(getFavs());
    }, []);

    const onUpdate = () => {
        setFavs(getFavs());
    }
    return (
        <div className='favs-Section'>
            <p className='favs-paragraph'><BsFillHeartFill className='favs-heart'/>Your favorite movies:</p>
            { favs.length?
                <section className='movies-container'>
                    {favs.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} onUpdate={onUpdate} />)}
                </section> :
                <section className='no-favs'>
                    <p>You didn't favorite any movies, please<NavLink to='/'>select now.</NavLink></p>
                </section>
        
        }

        </div>
    )
}

export default PageFavs
