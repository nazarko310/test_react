import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";

import {getLocation} from "../../../services";
import {LocationListCard} from "../LocationListCard";
import {Pagination} from "../../Main";

export function LocationList() {

    const {search} = useLocation();

    const {info, location} = useSelector(({locationReducers}) => locationReducers);
    const {loading} = useSelector(({loadingReducers}) => loadingReducers);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {


            try {

                dispatch({type: 'LOADING'})

                const {results, info} = await getLocation(search) || {};

                dispatch({type: 'SET_LOCATION', payload: results})
                dispatch({type: 'SET_INFO_LOCATION', payload: info})


                dispatch({type: 'DONE'})

            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [dispatch, search])

    if (loading || !location) {
        return (<h2 className='error'>Loading...</h2>)
    }


    return (
        <Fragment>
            <div className="characters__inner">
                {
                    location.map(value => <LocationListCard item={value} loading={loading} key={value.id}/>)

                }
            </div>
            {
                <Pagination info={info.pages}/>
            }
        </Fragment>
    )
}
