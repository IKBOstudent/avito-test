import { Text } from '@gravity-ui/uikit';

import { ResetFiltersButton } from '@/features/ResetFiltersButton';
import { FilterSelect } from '@/features/FilterSelect';
import { genreVars, platformVars } from '@/entities/filter';

import styles from './FiltersBlock.module.scss';

export const FiltersBlock = () => {
    const filters = [
        { name: 'genre', options: genreVars },
        { name: 'platform', options: platformVars },
    ];

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
