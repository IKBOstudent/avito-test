import { useRef, useState } from 'react';
import { Button, Popup, Text } from '@gravity-ui/uikit';

import { ResetFiltersButton } from '@/features/ResetFiltersButton';
import { FilterSelect } from '@/features/FilterSelect';
import { genreVars, platformVars } from '@/entities/filter';

import styles from './FiltersBlock.module.scss';

interface IFiltersBlockProps {
    isMobile: boolean;
}

const FilterList = () => {
    const filters = [
        { name: 'genre', options: genreVars },
        { name: 'platform', options: platformVars },
    ] as const;

    return (
        <div className={styles.filterList}>
            {filters.map(item => (
                <div key={item.name} className={styles.filterItem}>
                    <FilterSelect name={item.name} options={item.options} />
                </div>
            ))}
        </div>
    );
};

export const FiltersBlock = ({ isMobile }: IFiltersBlockProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    if (isMobile) {
        return (
            <div>
                <Button
                    ref={buttonRef}
                    view="outlined"
                    onClick={() => setIsOpenPopup(prev => !prev)}
                >
                    <Text variant="body-2">Filters</Text>
                </Button>

                <Popup
                    anchorRef={buttonRef}
                    open={isOpenPopup}
                    placement="bottom-end"
                    onOutsideClick={() => setIsOpenPopup(false)}
                >
                    <div className={styles.popupWrapper}>
                        <FilterList />
                    </div>
                </Popup>
            </div>
        );
    }

    return (
        <div className={styles.root}>
            <div className={styles.head}>
                <Text variant="body-2">Filters</Text>
                <ResetFiltersButton />
            </div>
            <FilterList />
        </div>
    );
};
