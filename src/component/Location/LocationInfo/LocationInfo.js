import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function LocationInfo() {
    const {state} = useLocation();
    const dispatch = useDispatch();

    const loading = useSelector(store => store.characterReducer.loading);

    if (loading || !state ) {
        return (<h2>Loading...</h2>)
    }
    return (
        <div>
            LocationInfo
        </div>
    )
}