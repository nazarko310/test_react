import { Route, Switch } from "react-router-dom";
import EpisodeInfo from "../../component/Episode/EpisodeInfo/EpisodeInfo";
import EpisodeList from "../../component/Episode/EpisodeList/EpisodeList";



export function EpisodePage() {
    return (
        <div className='characters'>
            <div className="container">
                <Switch>
                    <Route path={'/episode/:id'} component={EpisodeInfo}/>
                    <Route path={'/episode'} component={EpisodeList}/>
                </Switch>
            </div>
        </div>
    )
}
