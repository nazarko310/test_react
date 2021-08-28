import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


export default function CharacterInfo() {
    const {state} = useLocation();

    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch(state.location.url)
            .then(value => value.json())
            .then(response => {
                setLocation(response)
            });
    }, [state.location.url])


    return (
        <div className='character__details'>
            <div className="character__details_inner">
                <img src={state.image} alt={state.name}/>
                <div className="character__details_content">
                    <h2>{state.name}</h2>
                    <div className="character__details_contentInner">
                        <div className='character__details_contentLeft'>
                            <p>Gender:</p>
                            <p>Status:</p>
                            <p>Species:</p>
                        </div>
                        <div className='character__details_contentRight'>
                            <p>{state.gender}</p>
                            <p>{state.status}</p>
                            <p>{state.species}</p>
                        </div>
                    </div>
                    <h2>Location</h2>
                    <div className="character__details_contentInner">
                        <div className='character__details_contentLeft'>
                            <p>Name:</p>
                            <p>Type:</p>
                            <p>Dimension:</p>
                        </div>
                        <div className='character__details_contentRight'>
                            <p>{location.name}</p>
                            <p>{location.type}</p>
                            <p>{location.dimension}</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}