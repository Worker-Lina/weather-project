import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getSelectCity = (state: StateSchema) =>
    state.weather?.selectCity ?? null;
export const getWeatherType = (state: StateSchema) =>
    state.weather?.type ?? null;