import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { weatherReducer } from "../../../../entities/Weather/model/slice/weatherSlice";
import { cityReducer } from "../../../../entities/City";
import { rtkApi } from "../../../../shared/api/rtkApi";
import { $api } from "../../../../shared/api/api";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        weather: weatherReducer,
        city: cityReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
