import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import Character from "../character/Character";
import {urlApiCharacters} from "../../services/API";

export default function PageOfCharacter({match: {params: {number}}}) {
    const characters = useSelector(store => store.characterReducer.charactersStore);
    const loading = useSelector(store => store.characterReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'LOADING'})
        fetch(`${urlApiCharacters}?page=${number}`)
            .then(value => value.json())
            .then(response => {
                dispatch({type: 'SET_CHARACTERS', payload: response.results})

            })
        dispatch({type: 'DONE'})
    }, [dispatch, number])
    return (
        <Fragment>
            {
                number
                    ? characters.map(value => <Character item={value} loading={loading} key={value.id}/>)
                    : <Fragment>OOps</Fragment>

            }
        </Fragment>
    )
}