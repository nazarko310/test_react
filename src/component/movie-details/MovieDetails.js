import {useEffect, useState} from "react";
import './MovieDetails.css'

export default function MovieDetails({location: {state}}) {
    const [movieDetails, setMovieDetails] = useState([[]]);

    useEffect(() => {
        setMovieDetails(state)
    }, [state])
    return (
        <div>
            <div className='movieDetails__block'>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                     alt={movieDetails.original_title}/>
                <div className='movieDetails__content'>
                    <div className='movieDetails__content-title'>
                        <p>Title</p>
                        <p>Popularity</p>
                        <p>Release_date</p>
                        <p>Genre</p>
                    </div>
                    <div className='movieDetails__content-text'>
                        <p>{movieDetails.original_title}</p>
                        <p>{movieDetails.popularity}</p>
                        <p>{movieDetails.release_date}</p>
                    </div>
                </div>
            </div>
            <p className='movieDetails__overview'>{movieDetails.overview}</p>
        </div>
    )
}