import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLocationByCharacterId} from "../../../services";

export function CharacterInfo() {
    const {state, state: {location: {url}}} = useLocation();

    const dispatch = useDispatch();

    const [location, setLocation] = useState([]);

    const loading = useSelector(({loadingReducer}) => loadingReducer);


    useEffect(() => {
        async function fetchData() {
            try {
                dispatch({type: 'LOADING'})

                getLocationByCharacterId(url).then(setLocation);

                dispatch({type: 'DONE'})

            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [dispatch, url])

    if (loading || !url || !location) {
        return (<h2>Loading...</h2>)
    }

    return (
        <div className='character__details'>
            <div className="character__details_inner">
                <img src={state.image} alt={state.name}/>
                <div className="character__details_content">
                    <h2>{state.name}</h2>
                    <div className="character__details_contentInner">
                        <div className='character__details_contentLeft'>
                            <p>Gender:</p>
                            <p>Status:</p>
                            <p>Species:</p>
                        </div>
                        <div className='character__details_contentRight'>
                            <p>{state.gender}</p>
                            <p>{state.status}</p>
                            <p>{state.species}</p>
                        </div>
                    </div>
                    <h2>Location</h2>
                    <div className="character__details_contentInner">
                        <div className='character__details_contentLeft'>
                            <p>Name:</p>
                            <p>Type:</p>
                            <p>Dimension:</p>
                        </div>
                        <div className='character__details_contentRight'>
                            <p>{location.name}</p>
                            <p>{location.type}</p>
                            <p>{location.dimension}</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
