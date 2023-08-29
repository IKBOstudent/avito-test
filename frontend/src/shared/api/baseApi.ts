import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { config } from '../lib';

export const baseApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: retry(fetchBaseQuery({ baseUrl: config.API_URI }), {
        maxRetries: 3,
    }),
    endpoints: builder => ({
        getAllGamesByFilter: builder.query<IGame[], TSearchFilter[]>({
            query: filters =>
                filters.length > 0
                    ? `/games?${filters
                          .map(({ name, value }) => `${name}=${value}`)
                          .join('&')}`
                    : '/games',
        }),
        getGameById: builder.query<IGame, string>({
            query: id => `/games/${id}`,
        }),
    }),
});

export const { useGetAllGamesByFilterQuery, useGetGameByIdQuery } = baseApi;
