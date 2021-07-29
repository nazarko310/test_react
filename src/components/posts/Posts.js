import data from '../data/data.json'
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        setInfo(data)
    }, [])
    return (
        <div>
            {
                info.map((value, index) => <Post item={value} key={index} editHistory={value.editHistory}/>)
            }
        </div>
    )
}