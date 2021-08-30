import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";

import {urlApiLocationPage} from "../../../services/API";
import Pagination from "../../Main/Pagination/Pagination";
import LocationListCard from "../LocationListCard/LocationListCard";


export default function LocationList() {
    const {search} = useLocation();

    const info = useSelector(store => store.locationReducers.infoStore);
    const location = useSelector(store => store.locationReducers.charactersStore);
    const loading = useSelector(store => store.loadingReducers.loading);


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({type: 'LOADING'})

        fetch(`${urlApiLocationPage(search)}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_LOCATION', payload: response.results})
                dispatch({type: 'SET_INFO_LOCATION', payload: response.info})
            })

        dispatch({type: 'DONE'})


    }, [dispatch, search])

    if (loading || !location) {
        return (<h2>Loading...</h2>)
    }

    return (
        <Fragment>
            <div className="characters__inner">
                {
                    location.map(value => <LocationListCard item={value} loading={loading} key={value.id}/>)

                }

            </div>
            <Pagination info={info.pages}/>
        </Fragment>
    )
}