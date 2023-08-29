import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from '@/shared/api';
import { gameReducer } from '@/entities/game';

export const store = configureStore({
    reducer: {
        gameReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: gDM => gDM().concat([baseApi.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;