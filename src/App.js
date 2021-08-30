import { Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import { Headers } from "./component";
import {CharacterPage, EpisodePage, LocationPage} from "./container";

function App() {
    return (
        <>
            <Headers/>

            <Switch>
                <Redirect exact from="/" to="/character"/>
                <Route path='/character' component={CharacterPage}/>
                <Route path='/location' component={LocationPage}/>
                <Route path='/episode' component={EpisodePage}/>
            </Switch>
        </>

    );
}

export default App;
