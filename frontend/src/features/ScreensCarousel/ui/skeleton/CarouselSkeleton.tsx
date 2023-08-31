import { Skeleton } from '@gravity-ui/uikit';
import styles from './CarouselSkeleton.module.scss';

export const CarouselSkeleton = ({
    screensPerPage,
}: {
    screensPerPage: number;
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.carousel}>
                <Skeleton />
            </div>

            <div className={styles.screens}>
                <div
                    className={styles.screenWrapper}
                    style={{
                        maxWidth: `calc(80px * ${screensPerPage} + 24px * ${
                            screensPerPage - 1
                        })`,
                    }}
                >
                    <ul>
                        {[...Array(screensPerPage)].map((_, i) => (
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
