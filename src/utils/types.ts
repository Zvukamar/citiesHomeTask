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

export type ColorType = keyof typeof colors;
export type SvgType = keyof typeof svgMap;