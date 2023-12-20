import {GET_WEATHER} from "../actions/getWeatherAction";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {...state, weatherInfo: action.payload}
        default:
            return state
    }
}