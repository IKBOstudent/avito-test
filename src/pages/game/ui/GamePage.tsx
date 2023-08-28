import { Link, useParams } from 'react-router-dom';

import { useGetGameByIdQuery } from '@/shared/api/baseApi';
import GameDetails from '@/widgets/GameDetails';

import styles from './GamePage.module.scss';

export const GamePage = () => {
    const { id } = useParams<{ id: string }>();
    const {
        data = null,
        isFetching,
        error,
    } = useGetGameByIdQuery(id || '0', {
        skip: !id,
    });

    const isNotFound = !id || (!isFetching && !data);

    if (isNotFound) {
        return (
            <div>
                Game not found, go to <Link to="/">home page</Link>
            </div>
        );
    }

    if (error) return null;
    if (!data) return null;

    return (
        <div className={styles.root}>
            <GameDetails game={data} loading={isFetching} />
        </div>
    );
};
