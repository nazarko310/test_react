import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Headers from "./component/header/Headers";
import Characters from "./component/charachters/Characters";

function App() {
    return (
        <Router>
            <Headers/>
            <Switch>
                <Route exact path={'/'} render={() =>
                    <div>
                        This is some page about Ricky and Morty
                    </div>
                }/>
                <Route path={'/character'} render={(props) => <Characters {...props}/>}/>
            </Switch>
        </Router>
    );
}

export default App;
