import { useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard";
import { BsFillHeartFill } from 'react-icons/bs';
import { useLocation } from 'react-router';
import { API_TOKEN } from '../globals/globalVariables';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const PageSearch = () => {
    let query = useQuery();
    const key = query.get('query');
    const getSearch = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${key}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawMovieData = await res.json();
        rawMovieData = rawMovieData.results.splice(0, 12);
        setSearchResult(rawMovieData);
    }
    
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        getSearch()
    }, [key]);

    return (
        <div className='favs-Section'>
            {searchResult.length ?
                <>
                    <p className='favs-paragraph'>We found some movies for you:</p>
                    <section className='movies-container'>

                        {searchResult.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} showDetail />)}
                    </section>
                </> :
                <section className='no-favs'>
                    <p>No movies found.</p>
                </section>

            }
        </div>
    )
}

export default PageSearch
