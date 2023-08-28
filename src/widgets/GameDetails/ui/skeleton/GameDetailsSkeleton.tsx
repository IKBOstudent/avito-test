import { Skeleton } from '@gravity-ui/uikit';

import styles from './GameDetailsSkeleton.module.scss';

export const GameDetailsSkeleton = () => {
    return (
        <div className={styles.root}>
            GameDetailsSkeleton <Skeleton className={styles.mainSkeleton} />
        </div>
    );
};
