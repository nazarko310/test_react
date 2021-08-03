import './Movies.css'
import Movie from "../movie/Movie";
import {useEffect, useState} from "react";
import {getMovie, getSearch} from "../../services/API";
import {Route} from "react-router-dom";
import MovieDetails from "../movie-details/MovieDetails";
import {useDispatch, useSelector} from "react-redux";

export default function Movies() {
    const [value, setValue] = useState([])
    const result = useSelector(({movies}) => movies)
    const dispatch = useDispatch()
    useEffect(() => {
        getMovie()
            .then(response =>
                dispatch({type: 'SET_MOVIES', payload: response.data.results}))
    }, [])
    const functionOnSubmit = (e) => {
        if (value) {
            e.preventDefault()
            getSearch(value).then(response => dispatch({type: 'SET_MOVIES', payload: response.data.results}))
        }     }
    const functionOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <div className='search'>
                <form onSubmit={functionOnSubmit} id='form'>
                    <input
                        type="search"
                        name='search'
                        placeholder='Search...'
                        value={value}
                        onChange={functionOnChange}
                    />

                </form>
            </div>
            <div className='movie__inner'>
                {

                    result.map(value => <Movie item={value} key={value.id}/>)

                }
            </div>
            <Route path={'/movie/:id'} component={MovieDetails}/>
        </div>
    )
}