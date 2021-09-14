import { useEffect, useState } from 'react'
import globalAppState from '../store/globalAppState';
import MovieCard from "../components/MovieCard";

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
        <div style={{top: '100px', position: 'relative'}}>
             <section className='moviesContainer'>
            { favs.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie}  onUpdate={onUpdate}/>)}
        </section>
        </div>
    )
}

export default PageFavs
