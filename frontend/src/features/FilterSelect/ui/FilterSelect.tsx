import { useState } from 'react';
import { Select, Text } from '@gravity-ui/uikit';

import styles from './FilterSelect.module.scss';

interface IFilterSelectProps {
    name: string;
    options: readonly string[];
}

const defaultOption = '--';

export const FilterSelect = ({ name, options }: IFilterSelectProps) => {
    const [current, setCurrent] = useState<string[]>([]);

    const onUpdate = (nextValue: string[]) => {
        setCurrent(nextValue[0] == defaultOption ? [] : nextValue);
    };

    return (
        <div className={styles.root}>
            <Text variant="body-1">{name.toUpperCase()}</Text>
            <Select
                size="l"
                className={styles.select}
                value={current}
                placeholder={defaultOption}
                onUpdate={onUpdate}
                options={[defaultOption, ...[...options].sort()].map(item => ({
                    value: item,
                    content: item,
                }))}
            ></Select>
        </div>
    );
};
