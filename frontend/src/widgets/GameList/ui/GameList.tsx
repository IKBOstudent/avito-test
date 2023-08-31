import { Text } from '@gravity-ui/uikit';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { GameCard, GameCardSkeleton } from '@/features/GameCard';
import { useGetList } from '../lib/useGetList';

import styles from './GameList.module.scss';

export const GameList = () => {
    const { data, isFetching, error } = useGetList();

    const [currentIndex, setCurrentIndex] = useState(18);

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

    return isFetching ? (
        <div className={styles.rootSkeleton}>
            {[...Array(7)].map((_, i) => (
                <GameCardSkeleton key={i} />
            ))}
        </div>
    ) : (
        <div className={styles.root}>
            <InfiniteScroll
                dataLength={currentIndex}
                next={async () => {
                    setTimeout(() => {
                        setCurrentIndex(prev =>
                            Math.min(data.length, prev + 24)
                        );
                    }, 100);
                }}
                hasMore={currentIndex < data.length}
                loader={null}
            >
                {data.slice(0, currentIndex).map((_, i) => (
                    <GameCard key={i} item={data[i]} />
                ))}
            </InfiniteScroll>
        </div>
    );
};
