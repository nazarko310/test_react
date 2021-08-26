import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {urlApiCharacters} from "../../services/API";
import Character from "../character/Character";

export default function PageOfCharacter({location: {state}}) {
    console.log(state)
    const characters = useSelector(store => store.characterReducer.charactersStore);
    const loading = useSelector(store => store.characterReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'LOADING'})
        fetch(`${urlApiCharacters}/?page=${state}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_CHARACTERS', payload: response.results})
            })
        dispatch({type: 'DONE'})
    }, [dispatch, state])

    return (
        <div>
            {
                characters.map(value => <Character item={value} loading={loading} key={value.id}/>)
            }
        </div>
    )
}