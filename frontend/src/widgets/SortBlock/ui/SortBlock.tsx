import { SortSelect } from '@/features/SortSelect';

import styles from './SortBlock.module.scss';

const sortOptions = ['1', '23', '3'];

export const SortBlock = () => {
    return (
        <div className={styles.root}>
            <SortSelect options={sortOptions} />
        </div>
    );
};
