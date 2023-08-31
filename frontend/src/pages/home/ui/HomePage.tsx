import { useMediaQuery } from 'react-responsive';

import SortBlock from '@/widgets/SortBlock';
import FiltersBlock from '@/widgets/FiltersBlock';
import GameList from '@/widgets/GameList';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const isBigScreen = useMediaQuery({ minWidth: 1150 });

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.control}>
                        <SortBlock />
                        {!isBigScreen && <FiltersBlock isMobile={true} />}
                    </div>
                    <GameList />
                </main>

                {isBigScreen && (
                    <aside className={styles.aside}>
                        <FiltersBlock isMobile={false} />
                    </aside>
                )}
            </div>
        </div>
    );
};
