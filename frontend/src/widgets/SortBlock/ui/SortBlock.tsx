import { SortSelect } from '@/features/SortSelect';
import { TSort, selectSort, setSort, sortVars } from '@/entities/filter';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import styles from './SortBlock.module.scss';

export const SortBlock = () => {
    const dispatch = useAppDispatch();
    const sort = useAppSelector(selectSort);

    return (
        <div className={styles.root}>
            <SortSelect
                current={[sort]}
                options={sortVars}
                onUpdate={nextValue => dispatch(setSort(nextValue[0] as TSort))}
            />
        </div>
    );
};
