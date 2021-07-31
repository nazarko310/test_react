import './App.css';
import Movies from "./component/movies/Movies";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return (
        <div className='container'>
            <Router>

                <Movies/>
            </Router>
        </div>
    );
}

export default App;
