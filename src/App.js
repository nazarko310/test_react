import './App.css';
import Posts from "./components/posts/Posts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import data from "./components/data/data.json";
import {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const [info, setInfo] = useState([]);
    useEffect(() => {

        setInfo(data)
    }, [])
    return (
        <div>
            <Header/>
            <div className='container'>
                <Router>
                    <Posts item={info}/>
                </Router>
            </div>
            <Footer item={info}/>
        </div>
    );
}

export default App;
