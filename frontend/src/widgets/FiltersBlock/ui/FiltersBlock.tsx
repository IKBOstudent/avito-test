import { ResetFiltersButton } from '@/features/ResetFiltersButton';
import { FilterSelect } from '@/features/FilterSelect';

import styles from './FiltersBlock.module.scss';

const filters = [
    { name: 'genre', options: ['1', '2', '31'] },
    { name: 'platform', options: ['2', '33'] },
];

export const FiltersBlock = () => {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <h3>Filters</h3>
                <ResetFiltersButton />
            </div>

            <div className={styles.filterList}>
                {filters.map(item => (
                    <div key={item.name} className={styles.filterItem}>
                        <FilterSelect name={item.name} options={item.options} />
                    </div>
                ))}
            </div>
        </div>
    );
};
