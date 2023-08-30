import { useGetAllGamesByFilterQuery } from '@/shared/api/baseApi';
import GameCard from '@/features/GameCard';

import styles from './GameList.module.scss';

export const GameList = () => {
    const { data = [], isFetching, error } = useGetAllGamesByFilterQuery([]);

    if (error) return null;
    if (data.length === 0) return null;

    return (
        <div className={styles.root}>
            {data.slice(100, 107).map(item => (
                <GameCard key={item.id} item={item} loading={isFetching} />
            ))}
        </div>
    );
};
