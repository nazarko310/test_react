import { Fragment } from "react";
import { Link } from "react-router-dom";

export function LocationListCard({item, loading}) {

    if (loading) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Link to={{
            pathname: `location/${item.id}`,
            state: item
        }}>
            <div className='characters__elements'>
                <img src="https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4-696x443.jpg" alt="img"/>
                <h1>{item.type}</h1>
                <div className='characters__elements_info'>
                    <p>
                        {item.name}
                    </p>
                    <p>
                        {
                            item.dimension === 'unknown'
                                ? <Fragment>Dimension not found</Fragment>
                                : item.dimension
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}
