import { ChartData } from "../../../../widgets/Dashboard/model/types/chart";
import { City } from "../../../City/model/types/city";

export interface WeatherSchema {
    isLoading: boolean;
    error?: string;
    weathers?: ChartData[];
    selectCity?: City;
    type: string;
}