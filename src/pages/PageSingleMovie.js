import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovie from "../components/SingleMovie";
import { API_TOKEN } from "../globals/globalVariables";

const PageSingleMovie = () => {
// /movie/{movie_id}/reviews
    const [movieData, setMovieData] = useState(null);
    const [movieReview, setMovieReview] = useState(null);

    const { id } = useParams();

    const fecthMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=videos,images,credits`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawMovieData = await res.json();
        setMovieData(rawMovieData);
    }
    const fecthReview = async (page=1) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=${page}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawMovieReview = await res.json();
        setMovieReview(rawMovieReview);
    }
    useEffect(() => {
        fecthMovie();
        fecthReview();
    }, [])
    return (
        <div className='single-movie-page'>
            {movieData !== null && <SingleMovie movieObj={movieData} movieReview={movieReview} fecthReview={fecthReview}/>}
        </div>
    )
}

export default PageSingleMovie
