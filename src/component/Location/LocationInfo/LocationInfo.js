import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCharacterResidentsByLocationId} from "../../../services";

export function LocationInfo() {

    const {state, state: {residents}} = useLocation();

    const dispatch = useDispatch();

    const [resident, setResident] = useState([]);

    const loading = useSelector(({loadingReducer}) => loadingReducer);


    useEffect(() => {
        async function fetchData() {
            try {
                dispatch({type: 'LOADING'})

                getCharacterResidentsByLocationId(residents[1]).then(setResident)

                dispatch({type: 'DONE'})
            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [dispatch, residents])

    if (loading || !state) {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            <div className='character__details'>
                <div className="character__details_inner">
                    <img src='https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4-696x443.jpg'
                         alt={state.name}/>
                    <div className="character__details_content">
                        <h2>{state.name}</h2>
                        <div className="character__details_contentInner">
                            <div className='character__details_contentLeft'>
                                <p>Type:</p>
                                <p>Dimension:</p>
                            </div>
                            <div className='character__details_contentRight'>
                                <p>{state.type}</p>
                                <p>{state.dimension}</p>
                            </div>
                        </div>
                        <h2>Resident</h2>
                        <div className="character__details_contentInner">
                            <div className='character__details_contentLeft'>
                                <p>Name:</p>
                                <p>Type:</p>
                                <p>Gender:</p>
                            </div>
                            <div className='character__details_contentRight'>
                                <p>{resident.name}</p>
                                <p>{resident.type}</p>
                                <p>{resident.gender}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}