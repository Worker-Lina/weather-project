import { createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherApiResponse } from '../types/weather';
import { ThunkConfig } from '../../../../app/providers/StoreProvider';
import { getSelectCity } from '../selectors/weatherSelectors';
import { formatDate } from '../../../../shared/lib/formatDate/formatDate';
import { ChartData } from '../../../../widgets/Dashboard/model/types/chart';

export const fetchWeather = createAsyncThunk<
    ChartData[],
    string | undefined,
    ThunkConfig<string>
>('weather/fetchWeather', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const city = getSelectCity(getState());
    
    const apiKey = import.meta.env.VITE_API_KEY;

    const lat = city?.lat;
    const lon = city?.lon;

    if (!lat || !lon) {
        return rejectWithValue('Город не указан');
    }

    try {
        const response = await extra.api.get<WeatherApiResponse>(
            `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );

        if (!response.data) {
            throw new Error();
        }
        
        const filteredData = response.data.list.filter(
            item => item.dt_txt.includes("15:00:00")
        ).map(item => ({
            date: formatDate(item.dt_txt),
            temp: Math.round(item.main.temp),
            feels_like: Math.round(item.main.feels_like),
            pressure: Math.round(item.main.pressure * 0.75006),
            wind_speed: item.wind.speed,
            humidity: item.main.humidity,
            weather_icon: item.weather[0].icon,
            weather: item.weather
        }));

        return filteredData;
    } catch (e) {
        console.error(e);
        return rejectWithValue('Ошибка загрузки погоды');
    }
});