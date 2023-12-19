import { colors, svgMap } from "../utils";

export type CityType = {
    name: string;
    continent: string;
    active: boolean;
    country: string;
    description: string;
    image: string;
    coords: CoordinatesType;
};

export type CoordinatesType = {
    lat: number;
    lng: number;
};

export type WeatherType = {
    weather: { id: number; main: string; description: string; }[],
    main: { temp: number; feels_like: number; temp_min: number; temp_max: number; humidity: number; },
    wind: { speed: number },
    sys: { sunrise: number; sunset: number; },
    id: number,
    name: string;
}

export type ColorType = keyof typeof colors;
export type SvgType = keyof typeof svgMap;