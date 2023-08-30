import { baseApi } from '@/shared/api';
import { type TSearchFilter } from '@/entities/filter';
import { type IGame } from './types';

export const gameApi = baseApi.injectEndpoints({
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

export const { useGetAllGamesByFilterQuery, useGetGameByIdQuery } = gameApi;
