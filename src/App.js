import './App.css';
import Movies from "./component/movies/Movies";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from "react-redux";

function App() {
    const initialState = {
        movies: [],
    }

    function movieReducer(state = initialState, action) {
        const stateCopy = JSON.parse(JSON.stringify(state));
        switch (action.type) {
            case 'SET_MOVIES':
                return {stateCopy, movies: action.payload}
            default:
                return {...state}
        }
    }

    const store = createStore(movieReducer)
    return (
        <div className='container'>
            <Provider store={store}>
                <Router>
                    <Movies/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
