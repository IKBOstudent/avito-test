import { Skeleton } from '@gravity-ui/uikit';

import styles from './GameCardSkeleton.module.scss';

export const GameCardSkeleton = () => {
    return (
        <div className={styles.root}>
            <Skeleton className={styles.image} />
            <div className={styles.info}>
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    );
};
