import { Text } from '@gravity-ui/uikit';

import { categoryVars, platformVars } from '@/entities/filter';
import { ResetFiltersButton } from '@/features/ResetFiltersButton';
import { FilterSelect } from '@/features/FilterSelect';

import styles from './FiltersBlock.module.scss';

const filters = [
    { name: 'genre', options: categoryVars },
    { name: 'platform', options: platformVars },
];

export const FiltersBlock = () => {
    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <Text variant="body-2">Filters</Text>
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
