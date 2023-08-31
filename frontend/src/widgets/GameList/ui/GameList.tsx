import { Text } from '@gravity-ui/uikit';

import { GameCard } from '@/features/GameCard';
import { useGetList } from '../lib/useGetList';

import styles from './GameList.module.scss';

export const GameList = () => {
    const { data, isFetching, error } = useGetList();

    if (error) {
        return (
            <Text variant="display-1" className={styles.message}>
                Something went wrong! Try again later
            </Text>
        );
    }

    if (!isFetching && data.length === 0) {
        return (
            <Text variant="display-1" className={styles.message}>
                Nothing found :(
            </Text>
        );
    }

    return (
        <div className={styles.root}>
            {data.slice(0, 12).map(item => (
                <GameCard key={item.id} item={item} loading={isFetching} />
            ))}
        </div>
    );
};
