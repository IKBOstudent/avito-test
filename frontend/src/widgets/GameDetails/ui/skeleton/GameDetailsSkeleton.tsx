import { Skeleton } from '@gravity-ui/uikit';

import { ScreensCarousel } from '@/features/ScreensCarousel';

import styles from './GameDetailsSkeleton.module.scss';

export const GameDetailsSkeleton = () => {
    return (
        <div className={styles.root}>
            <div>
                <Skeleton />
            </div>

            <div className={styles.title}>
                <Skeleton />
            </div>

            <div className={styles.main}>
                <section className={styles.about}>
                    <ScreensCarousel screenshots={[]} loading={true} />
                    <div className={styles.short_desc}>
                        <Skeleton />
                    </div>

                    <div className={styles.game_info}>
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <div className={styles.desc}>
                        <Skeleton />
                        <Skeleton />
                    </div>
                </section>

                <aside className={styles.aside}>
                    <Skeleton />
                    <Skeleton />

                    <ul>
                        <li>
                            <Skeleton
                                style={{
                                    width: '30%',
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: '52%',
                                }}
                            />
                        </li>
                        <li>
                            <Skeleton
                                style={{
                                    width: '23%',
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: '58%',
                                }}
                            />
                        </li>
                        <li>
                            <Skeleton
                                style={{
                                    width: '26%',
                                }}
                            />
                            <Skeleton
                                style={{
                                    width: '44%',
                                }}
                            />
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};
