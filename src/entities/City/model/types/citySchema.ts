import { City } from "./city";

export interface CitySchema {
    isLoading: boolean;
    error?: string;
    cities?: City[];

    search: string;
}