import { useMemo } from 'react';
import { Text } from '@gravity-ui/uikit';

import { useGetAllGamesByFilterQuery } from '@/entities/game';
import { GameCard } from '@/features/GameCard';
import { useAppSelector } from '@/shared/lib/hooks';

import styles from './GameList.module.scss';

export const GameList = () => {
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

    if (error)
        return (
            <Text variant="display-1" className={styles.message}>
                Произошла ошибка! Попробуйте снова
            </Text>
        );
    if (data.length === 0)
        return (
            <Text variant="display-1" className={styles.message}>
                Ничего не найдено :(
            </Text>
        );

    return (
        <div className={styles.root}>
            {data.slice(0, 12).map(item => (
                <GameCard key={item.id} item={item} loading={isFetching} />
            ))}
        </div>
    );
};
