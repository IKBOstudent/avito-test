import { useGetAllGamesByFilterQuery } from '@/shared/api/baseApi';
import GameCard from '@/widgets/GameCard';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const { data = [], isFetching, error } = useGetAllGamesByFilterQuery([]);

    if (error) return null;
    if (data.length === 0) return null;

    return (
        <div className={styles.root}>
            {data.slice(0, 11).map(item => (
                <GameCard key={item.id} item={item} loading={isFetching} />
            ))}
        </div>
    );
};
