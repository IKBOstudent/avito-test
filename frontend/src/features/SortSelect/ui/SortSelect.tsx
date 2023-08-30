import { useState } from 'react';
import { Select, Text } from '@gravity-ui/uikit';

import styles from './SortSelect.module.scss';

interface ISelectProps {
    options: readonly string[];
}

export const SortSelect = ({ options }: ISelectProps) => {
    const [current, setCurrent] = useState<string[]>([options[0]]);

    const onUpdate = (nextValue: string[]) => {
        setCurrent(nextValue);
    };

    return (
        <div className={styles.root}>
            <Text variant="body-1">Sort by:</Text>
            <Select
                className={styles.select}
                value={current}
                onUpdate={onUpdate}
                options={options.map(item => ({ value: item, content: item }))}
            ></Select>
        </div>
    );
};
