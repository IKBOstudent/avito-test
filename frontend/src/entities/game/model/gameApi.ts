import { baseApi } from '@/shared/api';
import { type IGame } from './types';

export const gameApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getAllGamesByFilter: builder.query<IGame[], string>({
            query: filters => `/games?${filters}`,
        }),
        getGameById: builder.query<IGame, string>({
            query: id => `/games/${id}`,
        }),
    }),
});

export const { useGetAllGamesByFilterQuery, useGetGameByIdQuery } = gameApi;
