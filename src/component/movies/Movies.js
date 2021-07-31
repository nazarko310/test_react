import './Movies.css'
import Movie from "../movie/Movie";
import {useEffect, useState} from "react";
import {getMovie} from "../../services/API";
import {Route} from "react-router-dom";
import MovieDetails from "../movie-details/MovieDetails";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovie().then(response => setMovies(response.data.results))
    }, [])
    // console.log(movies)
    return (
        <div className='movie__inner'>
            {
                movies.map(value => <Movie item={value} key={value.id}/>)
            }
            <Route path={'/movie/:id'} component={MovieDetails}/>
        </div>
    )
}