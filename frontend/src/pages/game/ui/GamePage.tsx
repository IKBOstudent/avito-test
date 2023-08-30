import GameDetails from '@/widgets/GameDetails';

import styles from './GamePage.module.scss';

export const GamePage = () => {
    return (
        <div className={styles.root}>
            <GameDetails />
        </div>
    );
};
