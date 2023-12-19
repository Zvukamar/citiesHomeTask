// import mockWeather from '../__mock__/mockWeather.json';
const API_KEY = 'd824b852089f3d41adaab06af98d66a6';
const url = `https://api.openweathermap.org/data/2.5/onecall`;

export const fetchWeather = async (lon: number, lat: number, unit: string) => {
    const params = `?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
    const endpoint = url + params;
    const res = await fetch(endpoint);
    return await res.json();
}

