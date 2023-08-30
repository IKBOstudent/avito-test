import { Select, Text } from '@gravity-ui/uikit';

import styles from './SortSelect.module.scss';

interface ISelectProps {
    current: [string] | [];
    options: readonly string[];
    onUpdate: (nextValue: string[]) => void;
}

export const SortSelect = ({ current, options, onUpdate }: ISelectProps) => {
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
