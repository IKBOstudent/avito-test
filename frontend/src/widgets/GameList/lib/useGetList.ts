import { useMemo } from 'react';

import { useGetAllGamesByFilterQuery } from '@/entities/game';
import { useAppSelector } from '@/shared/lib/hooks';

export const useGetList = () => {
    const { sort, filters } = useAppSelector(state => state.filterReducer);

    const query = useMemo(() => {
        const sortQuery = `sort-by=${sort}`;
        const filtersQuery = filters
            .filter(item => item.value !== null)
            .map(({ name, value }) => `${name}=${value}`)
            .join('&')
            .replace('genre', 'category');

        return sortQuery + (filtersQuery && `&${filtersQuery}`);
    }, [sort, filters]);

    const { data = [], isFetching, error } = useGetAllGamesByFilterQuery(query);

    return { data, isFetching, error };
};
