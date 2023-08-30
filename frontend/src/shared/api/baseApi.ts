import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { config } from '../lib';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: retry(fetchBaseQuery({ baseUrl: config.API_URI }), {
        maxRetries: 3,
    }),
    endpoints: () => ({}),
});
