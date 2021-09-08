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
        timeout.current = setTimeout(nextSlide, 2000);

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

    /**
     * 
     * adult: false
    backdrop_path: "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg"
    genre_ids: [12, 14, 35, 28]
    id: 451048
    original_language: "en"
    original_title: "Jungle Cruise"
    overview: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine."
    popularity: 5788.065
    poster_path: "https://api.themoviedb.org/3/movie/now_playing/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
    release_date: "2021-07-28"
    title: "Jungle Cruise"
    video: false
    vote_average: 7.9
    vote_count: 1801
     */

    return (
        <div className='outerContainer'>
            {singleSliderMovies.map((singleSliderMovie, index) => (
                index === current && (
                    <Link to={`/movie/${singleSliderMovie.id}`}>
                        <div className='sliderWrapper'>
                            <div key={index} className='sliderContainer' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${singleSliderMovie.backdrop_path})` }}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + singleSliderMovie.poster_path} alt={singleSliderMovie.title} />
                                <IoArrowBackCircle onClick={preSlide} className='back' />
                                <IoArrowForwardCircle onClick={nextSlide} className='next' />
                            </div>
                        </div>
                    </Link>
                )
            ))}
        </div>
    )

}

//

//
export default Slider


/*
                <Carousel>
            {sliderMovies.map((singleSliderMovie, i) => (
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                src={'https://image.tmdb.org/t/p/w500/' + singleSliderMovie.poster_path}
                                alt={singleSliderMovie.title}
                            />
                            <Carousel.Caption>
                                <h3>{singleSliderMovie.title}</h3>
                                <p>{singleSliderMovie.vote_average} | {singleSliderMovie.release_date}</p>
                                <Link to={`/movie/${singleSliderMovie.id}`}>More Info</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
            ))
            }
            }
        </Carousel> */