import { Select } from '@gravity-ui/uikit';

import styles from './SortSelect.module.scss';

interface ISelectProps {
    options: string[];
}

export const SortSelect = ({ options }: ISelectProps) => {
    const current = ['1'];
    const onUpdate = () => undefined;

    return (
        <div className={styles.root}>
            <span>Sort by:</span>
            <Select
                className={styles.select}
                value={current}
                onUpdate={onUpdate}
                options={options.map(item => ({ value: item, content: item }))}
            ></Select>
        </div>
    );
};
