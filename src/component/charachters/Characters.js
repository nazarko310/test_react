import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Pagination from "../pagination/Pagination";
import {urlApiCharacters} from "../../services/API";
import {Route, Switch} from "react-router-dom";
import PageOfCharacter from "../page-character/PageOfCharacter";
import Character from "../character/Character";

export default function Characters({match: {url}}) {
    const info = useSelector(store => store.characterReducer.infoStore);
    const characters = useSelector(store => store.characterReducer.charactersStore);
    const loading = useSelector(store => store.characterReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'LOADING'})
        fetch(`${urlApiCharacters}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_CHARACTERS', payload: response.results})
                dispatch({type: 'SET_INFO', payload: response.info})
            })
        dispatch({type: 'DONE'})
    }, [dispatch])


    return (
        <div className='characters'>
            <div className="container">
                <div className="characters__inner">
                    {
                        PageOfCharacter &&
                        <Switch>
                            <Route exact path={'/character/:number'} component={PageOfCharacter}/>
                        </Switch>
                    }
                    {
                        characters.map(value => <Character item={value} loading={loading} key={value.id}/>)
                    }


                </div>
                <div className='characters__pagination'>
                    <Pagination info={info} url={url}/>
                </div>

            </div>
        </div>
    );
}