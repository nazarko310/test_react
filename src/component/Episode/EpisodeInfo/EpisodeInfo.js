import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCharacterByEpisodeId} from "../../../services";

export default function EpisodeInfo() {

    const {state, state: {characters}} = useLocation();

    const dispatch = useDispatch();

    const [character, setCharacter] = useState([]);

    const loading = useSelector(({loadingReducer}) => loadingReducer);


    useEffect(() => {
        async function fetchData() {

            try {
                dispatch({type: 'LOADING'})

                getCharacterByEpisodeId(characters[1]).then(setCharacter)

                dispatch({type: 'DONE'})

            } catch (e) {
                console.log(e)
            }
        }

        fetchData();

    }, [dispatch, characters])

    if (loading || !state) {
        return (<h2>Loading...</h2>)
    }

    return (
        <div>
            <div className='character__details'>
                <div className="character__details_inner">
                    <img src='https://media.cdn.adultswim.com/uploads/20191028/1910281358343-R&M.jpg'
                         alt={state.name}/>
                    <div className="character__details_content">
                        <h2>{state.name}</h2>
                        <div className="character__details_contentInner">
                            <div className='character__details_contentLeft'>
                                <p>Air_date:</p>
                                <p>episode:</p>
                            </div>
                            <div className='character__details_contentRight'>
                                <p>{state.air_date}</p>
                                <p>{state.episode}</p>
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
                                <p>{character.name}</p>
                                <p>{character.type}</p>
                                <p>{character.gender}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}