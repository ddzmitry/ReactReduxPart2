
import axios from 'axios';
const API_KEY = '933cce694442a49031b6635b21d87ac3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
const url = `${ROOT_URL}&q=${city},us`;

const request = axios.get(url);
// console.log("This is request" , request)
// to keep consistency
    return {
        type : FETCH_WEATHER,
        payload: request
    }
}