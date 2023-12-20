import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import {thunk} from "redux-thunk";

const initialState = {
    weatherInfo: {
        temp: null,
        city: null,
        country: null,
        pressure: null,
        sunset: null,
        message: 'Enter city name'
    }
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk))