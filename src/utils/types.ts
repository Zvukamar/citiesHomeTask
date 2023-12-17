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