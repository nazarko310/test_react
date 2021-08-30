import {Link} from "react-router-dom";
import {Fragment} from "react";

export default function EpisodeListCard({item, loading}) {

    if (loading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Link to={{
            pathname: `episode/${item.id}`,
            state: item
        }}>
            <div className='characters__elements'>
                <img src="https://media.cdn.adultswim.com/uploads/20191028/1910281358343-R&M.jpg" alt="img"/>
                <h2>{item.name}</h2>
                <div className='characters__elements_info'>
                    <p>
                        {item.air_date}
                    </p>
                    <p>
                        {
                            item.episode === 'unknown'
                                ? <Fragment>episode not found</Fragment>
                                : item.episode
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}