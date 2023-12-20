import React from 'react';
import {useDispatch} from "react-redux";
import {getWeather} from "../actions/getWeatherAction";

const Form = () => {
    const dispatch = useDispatch()

    const changeHandler = () => {
        dispatch(getWeather((e) => e.target.value))
    }
    return (
            <div>
                <input
                onChange={changeHandler}
                type='text'
                placeholder='City'
                value={state.city}
            />
            <button onClick={()=> dispatch(getWeather(city))}>Get weather</button>
        </div>
    )
}

export default Form