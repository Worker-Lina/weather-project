import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../app/providers/StoreProvider';
import { City } from '../types/city';
import { getCitySearch } from '../selectors/citySelectors';

export const fetchCities = createAsyncThunk<
    City[],
    string | undefined,
    ThunkConfig<string>
>('city/fetchCities', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const search = getCitySearch(getState());

    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        const response = await extra.api.get<City[]>(
            `/geo/1.0/direct?q=${search}&limit=3&appid=${apiKey}`
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue('Ошибка загрузки погоды');
    }
});