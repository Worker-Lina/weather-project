import { createReduxStore, AppDispatch } from "./config/store";
export { StoreProvider } from "./ui/StoreProvider";

import type {
    StateSchema,
    ThunkConfig,
} from './config/StateSchema';

export { createReduxStore };

export type { AppDispatch };

export type {
    StateSchema,
    ThunkConfig,
};
