import {useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import Pagination from "../pagination/Pagination";
import {urlApiCharacters} from "../../services/API";
import {Route, Switch} from "react-router-dom";
import PageOfCharacter from "../page-character/PageOfCharacter";


export default function Characters({match: {url}}) {
    const info = useSelector(store => store.characterReducer.infoStore);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`${urlApiCharacters}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_INFO', payload: response.info})
            })
    }, [dispatch])


    return (
        <div className='characters'>
            <div className="container">
                <div className="characters__inner">
                    <Switch>
                        <Route exact to={'character/:number'} component={PageOfCharacter}/>
                    </Switch>

                </div>
                <div className='characters__pagination'>
                    <Pagination info={info} url={url}/>
                </div>

            </div>
        </div>
    );
}