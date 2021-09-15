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
        <div className='favs-Section' style={{ top: '100px', position: 'relative' }}>
            <p className='favs-paragraph'>Your favorite movies:</p>
            <section className='movies-container'>
                {favs.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} onUpdate={onUpdate} />)}
            </section>
        </div>
    )
}

export default PageFavs
