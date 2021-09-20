import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { API_TOKEN } from '../globals/globalVariables';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

const Slider = () => {

    const [singleSliderMovies, setSingleSliderMovies] = useState([]);

    useEffect(() => {

        const fecthMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 4);
            setSingleSliderMovies(rawMovieData);
        }

        fecthMovies();

    }, []);

    const [current, setCurrent] = useState(0);
    const length = singleSliderMovies.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }
        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }

    }, [current, length]);

    const nextSlide = (e) => {
        e.preventDefault();
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);

    }

    const preSlide = (e) => {
        e.preventDefault();
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(singleSliderMovies) || length <= 0) {
        return null;
    }

    return (
        <div className='outerContainer'>
            {singleSliderMovies.map((singleSliderMovie, index) => (
                index === current && (
                    <div className='sliderWrapper'>
                        <Link to={`/movie/${singleSliderMovie.id}`}>
                            <div key={index} className='sliderContainer' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${singleSliderMovie.backdrop_path})` }}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + singleSliderMovie.poster_path} alt={singleSliderMovie.title} className="slider-img" />
                                <div className="slider-title">{singleSliderMovie.title}</div>
                                <IoArrowBackCircle onClick={preSlide} className='back' />
                                <IoArrowForwardCircle onClick={nextSlide} className='next' />
                            </div>
                        </Link>
                    </div>
                )
            ))}
        </div>
    )

}

//

//
export default Slider