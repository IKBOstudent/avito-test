import SortBlock from '@/widgets/SortBlock';
import FiltersBlock from '@/widgets/FiltersBlock';
import GameList from '@/widgets/GameList';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <SortBlock />
                    <GameList />
                </main>

                <aside className={styles.aside}>
                    <FiltersBlock />
                </aside>
            </div>
        </div>
    );
};
