import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherSchema } from '../types/weatherSchema';
import { fetchWeather } from '../services/fetchWeather';
import { City } from '../../../City/model/types/city';
import { ChartData } from '../../../../widgets/Dashboard/model/types/chart';
  
const initialState: WeatherSchema = {
    isLoading: false,
    error: undefined,
    weathers: undefined,
    selectCity: undefined,
    type: 'temp',
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setSelectCity: (state, action: PayloadAction<City>) => {
            state.selectCity = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<ChartData[]>) => {
            state.isLoading = false;
            state.weathers = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Ошибка загрузки';
        });
    },
});

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;