import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";

import Pagination from "../Pagination/Pagination";
import {urlApiCharacters} from "../../../services/API";
import CharactersListCard from "../CharactersListCard/CharactersListCard.js";


export default function CharactersList({match: {url}}) {


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

    if (loading || !characters) {
        return 'Loading...'
    }

    return (
        <Fragment>
            <div className="characters__inner">
                {/*{*/}

                {/*    <Switch>*/}
                {/*        <Route path={'character?page=:number'} component={PageOfCharacter}/>*/}
                {/*    </Switch>*/}
                {/*}*/}
                {
                    characters.map(value => <CharactersListCard item={value} loading={loading} key={value.id}/>)

                }

            </div>
            <Pagination info={info} url={url}/>
        </Fragment>
    );
}