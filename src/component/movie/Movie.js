export default function Movie({item}) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.original_title}/>
            <h3>{item.original_title}</h3>
            <p>{item.overview}</p>
        </div>
    )
}