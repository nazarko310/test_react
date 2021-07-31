import {useEffect, useState} from "react";

export default function MovieDetails({location: {state}}) {
    const [movieDetails, setMovieDetails] = useState([]);
    useEffect(() => {
        setMovieDetails({...state})
    }, [state])
    return (
        <div>
            <div className='movieDetails__block'>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.original_title}/>
            </div>
        </div>
    )
}