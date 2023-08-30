import styles from './FilterSelect.module.scss';

interface IFilterSelectProps {
    name: string;
    options: string[];
}

export const FilterSelect = ({ name, options }: IFilterSelectProps) => {
    return (
        <div className={styles.root}>
            <span>{name.toUpperCase()}</span>
            <div>FILTER</div>
        </div>
    );
};
