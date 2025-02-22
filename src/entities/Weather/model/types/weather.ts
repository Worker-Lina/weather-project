interface MainWeather {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number,
}

interface Wind {
    speed: number,
    deg: number,
    gust: number
}

interface WeatherType {
    id: number,
    main: string,
    description: string,
    icon: string
}

interface Sys {
    [key:string]: string;
}

interface Clouds {
    [key:string]: number;
}

export interface WeatherApiResponse {
    list: Weather[];
}

export interface Weather{
    dt: number,
    main: MainWeather,
    weather: WeatherType[],
    clouds: Clouds,
    wind: Wind,
    visibility: number,
    pop: number,
    sys: Sys,
    dt_txt: string;
    rain?: Clouds
}