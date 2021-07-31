import './Movie.css'
import {Link} from "react-router-dom";

export default function Movie({item}) {

    return (
        <div className='movie__block'>

            <Link to={
                {
                    pathname: `/movie/${item.id}`,
                    state: item
                }
            }>

                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title}/>
            </Link>

            <h3 className='movie__block_title'>{item.original_title}</h3>
            <div className='movie__block_inner'>
                <p>{item.release_date}</p>
                <p>{item.vote_average}</p>
            </div>
        </div>
    )
}