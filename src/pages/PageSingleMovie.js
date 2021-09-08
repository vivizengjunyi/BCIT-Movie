import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovie from "../components/SingleMovie";
import { API_TOKEN } from "../globals/globalVariables";

const PageSingleMovie = () => {

    const [movieData, setMovieData] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fecthMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            setMovieData(rawMovieData);
        }

        fecthMovie();
    }, [])

    return (
        <div className='single-movie-page'>
            {movieData !== null && <SingleMovie movieObj={movieData} />}
        </div>
    )
}

export default PageSingleMovie
