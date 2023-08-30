import { SortSelect } from '@/features/SortSelect';
import { sortVars } from '@/entities/filter';

import styles from './SortBlock.module.scss';

export const SortBlock = () => {
    return (
        <div className={styles.root}>
            <SortSelect options={sortVars} />
        </div>
    );
};
