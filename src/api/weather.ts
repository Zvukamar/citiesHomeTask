import { API_KEY } from "@env";
// import mockWeather from '../__mock__/mockWeather.json';
const url = `https://api.openweathermap.org/data/2.5/weather`;

export const fetchWeather = async (city: string, unit: string) => {
    const params = `?q=${city}&appid=${API_KEY}&units=${unit}`
    const endpoint = url + params;
    const res = await fetch(endpoint);
    return await res.json();
}

