import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {getEpisode} from "../../../services";
import {Pagination} from "../../Main";
import EpisodeListCard from "../EpisodeListCard/EpisodeListCard";



export default function EpisodeList() {

    const {search} = useLocation();

    const {info, episode} = useSelector(({episodeReducers}) => episodeReducers)
    const {loading} = useSelector(({loadingReducers}) => loadingReducers);


    const dispatch = useDispatch();

    async function fetchData() {
        try {

            dispatch({type: 'LOADING'})

            const {results, info} = await getEpisode(search) || {};

            dispatch({type: 'SET_EPISODE', payload: results})
            dispatch({type: 'SET_INFO_EPISODE', payload: info})


            dispatch({type: 'DONE'})

        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        fetchData()

    }, [dispatch, search])

    if (loading || !episode) {
        return (<h2 className='error'>Loading...</h2>)
    }


    return (
        <Fragment>
            <div className="characters__inner">
                {
                    episode.map(value => <EpisodeListCard item={value} loading={loading} key={value.id}/>)

                }
            </div>
            {
                <Pagination info={info.pages}/>
            }
        </Fragment>
    )
}