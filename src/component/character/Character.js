import {Fragment} from "react";

export default function Character({item, loading}) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (

        <div className='characters__elements'>
            <img src={item.image} alt={item.name}/>
            <div className='characters__elements_info'>
                <p>
                    {item.name}
                </p>
                <p>
                    {
                        item.gender === 'unknown'
                            ? <Fragment>Not a person</Fragment>
                            : item.gender
                    }

                </p>
            </div>
        </div>
    )
}