import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import { API_TOKEN} from '../globals/globalVariables';
import { useParams, useLocation } from 'react-router-dom';

function PageHome() {
    const {categoryId = 'popular'} = useParams();

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${categoryId}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 15);
            setMovieData(rawMovieData);

        }
        fetchMovies();
    }, [categoryId]);


    return (
        <section className="home-page">
            <NavSort categoryId={categoryId} />
            {movieData !== null && <Movies movieData={movieData} />}
        </section>
    )
}

export default PageHome;
