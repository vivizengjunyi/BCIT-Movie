import { useEffect, useState } from "react";
import noPhoto from '../images/no-photo.jpeg';
import { AiFillStar } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import globalAppState from '../store/globalAppState';
import { API_TOKEN} from '../globals/globalVariables';


const SingleMovie = ({ movieObj, movieReview, fecthReview }) => {

    function getIsFav(arr, id) {
        if (arr.length === 0) {
            return false;
        }
        // Checks whether the object is favourited
        return arr.some((item) => item.id === id);
    }

    const { getFavs, actions } = globalAppState;
    const [favs, setFavs] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [totalSize, setTotalSize] = useState(0);
    const [currentShowSize, setCurrentShowSize] = useState(3);
    const [video, setVideo] = useState();
    const [similar, setSimilar] = useState();

    useEffect(() => {
        setFavs(getFavs());
    }, []);

    useEffect(() => {
        if(!movieReview) return;
        setReviews(reviews => {
            return [
                ...reviews,
                ...movieReview.results
            ]
        })
        setCurrentPage(movieReview.page);
        setTotalPage(movieReview.total_pages);
        setTotalSize(movieReview.total_results)
    }, [movieReview]);

    const handleSetFavs = (movieObj, isFave) => {
        const favs = actions[isFave ? 'removeFav' : 'addFav'](movieObj);
        setFavs(favs);
    }

    const getReviewAvatar = (review) => {
        const avatar = review.author_details.avatar_path;
        return avatar ? avatar.indexOf('http') > 0 ?
            avatar.substr(1) :
            `https://image.tmdb.org/t/p/w200/${avatar}` : 'https://avatars.dicebear.com/api/avataaars/.svg';
    }

    const loadMore = () => {
        if(currentShowSize + 3 > reviews.length && currentPage < totalPage){
            fecthReview(currentPage + 1)
        }
        setCurrentShowSize(Math.min(currentShowSize + 3, totalSize))
    }

useEffect(() => {
    const fetchMoviesVideo = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieObj.id}/videos?language=en-US&page=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawVideoData = await res.json();
        setVideo(rawVideoData);

    }
    if(movieObj) {
        fetchMoviesVideo();
    }
    
}, [movieObj]);

/* useEffect(() => {
    const fetchMoviesVideo = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieObj.id}/similar?language=en-US&page=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
            }
        });

        let rawSimilarData = await res.json();
        rawSimilarData = rawSimilarData.results.splice(0, 6);
        setSimilar(rawSimilarData);

    }
    if(movieObj) {
        fetchMoviesVideo();
    }
    
}, [movieObj]); */

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
                        <div className='genres'>
                            {movieObj.genres.map((singleGenres, i) => (
                                <ul>
                                    <li>{singleGenres.name}</li>
                                </ul>
                            ))}
                        </div>
                        <div className="flexRow">
                            <div className='stick'>
                                <AiFillStar className='start' />
                                <p>{movieObj.vote_average}</p>
                            </div>
                            <p>{movieObj.release_date}</p>
                        </div>
                        <div className='line'></div>
                        <div className='tagline'>{movieObj.tagline}</div>
                        <p className='overview-title'>Overview</p>
                        <p className='overview'>{movieObj.overview}</p>
                        <div className='cast'>
                            <p className='cast-title'>Cast &#38; Crew</p>
                            <div className='cast-layout'>
                                {movieObj.credits.cast.slice(0, 4).map((cast) =>
                                    <div class='cast-detail'>
                                        {cast.profile_path === null ? 
                                        <img src={noPhoto} alt="no photo" /> :
                                        <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} />
                                        }
                                        <p className='cast-name'>{cast.name}</p>
                                        <p className='cast-character'>{cast.character}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {video && video.results[0] && video.results[1] &&
            <div className='movie-video'>
                <iframe
                src={`https://www.youtube.com/embed/${video.results[0]?.key}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
                <iframe
                src={`https://www.youtube.com/embed/${video.results[1]?.key}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            }
            <div className='movie-review'>
                <div className="container">
                    <div className="align-center">
                        <p className="review-title">Reviews</p>
                    </div>
                    {reviews.length === 0 ? 
                    <p className='no-review'>No reviews so far.</p> :
                    <ul className="review-list cols-3 cols-1-xs align-center">
                        {
                            reviews && reviews.slice(0, currentShowSize).map(review => {
                                return <li> <img src={getReviewAvatar(review)} title=""
                                    alt="" data-edit="false" data-editor="field"
                                    data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                    <div className="reviewer-name" contenteditable="false">{review.author}</div>
                                    <p className="review-content" contenteditable="false">{review.content}</p>
                                    <div className="review-more">
                                        <a href={review.url} target="_blank">view more</a>
                                    </div>
                                    <small
                                        contenteditable="false">{new Date(review.created_at).toLocaleDateString()}</small>
                                </li>
                            })
                        }
                    </ul>
                    }
                    
                </div>
                {
                currentShowSize < totalSize  && <div className="load-more">
                    <a href="javascript:void(0)" onClick={loadMore}>load more</a>
                </div>
            }
            </div>
            <div className='similar-movie'>
                {similar &&
                    similar.map((singleSimilar,i) => 
                        <div>{singleSimilar}</div>
                    )
                }
            </div>
        </div>
    )
}

export default SingleMovie;