import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitySchema } from '../types/citySchema';
import { fetchCities } from '../services/fetchCities';
import { City } from '../types/city';

const initialState: CitySchema = {
    isLoading: false,
    error: undefined,
    cities: undefined,
    search: '',
};

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
                state.isLoading = false;
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: cityActions } = citySlice;
export const { reducer: cityReducer } = citySlice;