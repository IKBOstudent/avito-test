import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from '@/shared/api';
import { filterReducer } from '@/entities/filter';

const reducers = combineReducers({
    filterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: gDM => gDM().concat([baseApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
