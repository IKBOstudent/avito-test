import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import GameDetails from '@/widgets/GameDetails';

import styles from './GamePage.module.scss';

export const GamePage = () => {
    const { id } = useParams<{ id: string }>();
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const { data } = { data: [] };

    useEffect(() => {
        setTimeout(() => setIsFetching(false), 3000);
    }, []);

    const isNotFound = !id || (!isFetching && !data);

    if (isNotFound) {
        return (
            <div>
                Game not found, go to <Link to="/">home page</Link>
            </div>
        );
    }

    return (
        <div className={styles.root}>
            <GameDetails isFetching={isFetching} />
        </div>
    );
};
