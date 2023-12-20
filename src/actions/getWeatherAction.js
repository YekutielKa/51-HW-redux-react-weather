import {api_key, base_url} from "../units/constants";

export const GET_WEATHER = 'GET_WEATHER';

export const getWeather = city => ({
    type: GET_WEATHER,
    payload: city
})

export const getWeather = async (city) => {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        this.setState({
            weatherInfo: {
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
                message: null
            }
        })
    } catch (e) {
        this.setState({
            weatherInfo: {
                message: 'Enter correct city name'
            }
        })
    }
}