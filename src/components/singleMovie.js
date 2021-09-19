import { useEffect, useState } from "react";
import noPhoto from '../images/no-photo.jpeg';
import { AiFillStar } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import globalAppState from '../store/globalAppState';


const SingleMovie = ({ movieObj, movieReview, fecthReview }) => {

    function getIsFav(arr, id) {
        if (arr.length === 0) {
            return false;
        }
        // Checks whether the object is favourited
        return arr.some((item) => item.id === id);
    }

    const { getFavs, actions } = globalAppState;
    const [favs, setFavs] = useState([])
    const [reviews, setReviews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [totalSize, setTotalSize] = useState(0)
    const [currentShowSize, setCurrentShowSize] = useState(3)
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
            </div>

            {
                currentShowSize < totalSize  && <div className="load-more">
                    <a href="javascript:void(0)" onClick={loadMore}>load more</a>
                </div>
            }
        </div>
    )
}

export default SingleMovie;
// {
//     "adult": false,
//     "backdrop_path": "/gzppdxEJ6fofhtLzSVSUJZEVxvq.jpg",
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "",
//     "id": 848278,
//     "imdb_id": "tt14442328",
//     "original_language": "en",
//     "original_title": "Jurassic Hunt",
//     "overview": "Female adventurer Parker joins a crew of male trophy hunters in a remote wilderness park. Their goal: slaughter genetically recreated dinosaurs for sport using rifles, arrows, and grenades. After their guide is killed by raptors, the team tries to escape the park – but the hunters quickly become the hunted. Even worse, the park’s manager suspects Parker of being a spy and sends a hit squad after her. This battle’s about to become primitive!",
//     "popularity": 4238.321,
//     "poster_path": "/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg",
//     "production_companies": [
//         {
//             "id": 1632,
//             "logo_path": "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
//             "name": "Lionsgate",
//             "origin_country": "US"
//         },
//         {
//             "id": 3604,
//             "logo_path": "/jC6Hk3ZyNRlVPJsA0xGlAhgd2RP.png",
//             "name": "Grindstone Entertainment Group",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [],
//     "release_date": "2021-09-01",
//     "revenue": 0,
//     "runtime": 83,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "This time it's mankind that's going extinct.",
//     "title": "Jurassic Hunt",
//     "video": false,
//     "vote_average": 4.8,
//     "vote_count": 96
// }