import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getCitySearch = (state: StateSchema) =>
    state.city?.search ?? '';
