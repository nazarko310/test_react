import './App.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Headers from "./component/Characters/Header/Headers";
import CharacterPage from "./container/CharactrePage/CharacterPage";

function App() {
    return (
        <Router>
            <Headers/>
            <Switch>
                <Redirect exact from="/" to="/character?page=1"/>
                <Route path='/character' component={CharacterPage}/>
            </Switch>

        </Router>

    );
}

export default App;
