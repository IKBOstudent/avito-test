import { Select, Text } from '@gravity-ui/uikit';

import {
    TFilterTypes,
    setFilter,
    selectFilter,
    TFilter,
} from '@/entities/filter';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import styles from './FilterSelect.module.scss';

interface IFilterSelectProps {
    name: TFilterTypes;
    options: readonly string[];
}

const defaultOption = '--';

export const FilterSelect = ({ name, options }: IFilterSelectProps) => {
    const dispatch = useAppDispatch();
    const current = useAppSelector(state => selectFilter(state, name));

    const handleUpdate = (nextValue: string[]) => {
        dispatch(
            setFilter({
                name,
                value: nextValue[0] === defaultOption ? null : nextValue[0],
            } as TFilter<TFilterTypes>)
        );
    };

    return (
        <div className={styles.root}>
            <Text variant="body-1">{name.toUpperCase()}</Text>
            <Select
                size="l"
                className={styles.select}
                value={current ? [current] : []}
                placeholder={defaultOption}
                onUpdate={handleUpdate}
                options={[defaultOption, ...[...options].sort()].map(item => ({
                    value: item,
                    content: item,
                }))}
            ></Select>
        </div>
    );
};
