import './App.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Headers from "./component/Main/Header/Headers";
import CharacterPage from "./container/CharactrePage/CharacterPage";
import LocationPage from "./container/LocationPage/LocationPage";

function App() {
    return (
        <Router>
            <Headers/>
            <Switch>
                <Redirect exact from="/" to="/character"/>
                <Route path='/character' component={CharacterPage}/>
                <Route path='/location' component={LocationPage}/>
            </Switch>
        </Router>

    );
}

export default App;
