import Movie from "../movie/Movie";
import {useEffect, useState} from "react";
import {getMovie} from "../../services/API";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovie().then(response => setMovies(response.data.results))
    }, [])
    // console.log(movies)
    return (
        <div>
            {
                movies.map(value => <Movie item={value} key={value.id}/>)
            }
        </div>
    )
}