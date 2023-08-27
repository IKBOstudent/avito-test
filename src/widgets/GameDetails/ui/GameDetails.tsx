import { GameDetailsSkeleton } from './GameDetailsSkeleton';

import styles from './GameDetails.module.scss';

interface IGameDetailsProps {
    isFetching: boolean;
}

export const GameDetails = ({ isFetching }: IGameDetailsProps) => {
    if (isFetching) {
        return <GameDetailsSkeleton />;
    }
    return <div className={styles.root}>GameDetails</div>;
};
