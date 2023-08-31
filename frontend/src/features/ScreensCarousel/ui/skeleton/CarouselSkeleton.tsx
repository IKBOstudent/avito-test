import { Skeleton } from '@gravity-ui/uikit';
import styles from './CarouselSkeleton.module.scss';

export const CarouselSkeleton = () => {
    return (
        <div className={styles.root}>
            <div className={styles.carousel}>
                <Skeleton />
            </div>

            <div className={styles.screens}>
                <div
                    className={styles.screenWrapper}
                    style={{ maxWidth: 'calc(80px * 3 + 24px * 2)' }}
                >
                    <ul>
                        {[...Array(3)].map((_, i) => (
                            <li key={i}>
                                <Skeleton />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
