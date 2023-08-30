import { MouseEvent } from 'react';
import { Button } from '@gravity-ui/uikit';

export const ResetFiltersButton = () => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('RESET clicked', e);
    };

    return (
        <Button view="flat" size="l" onClick={handleClick}>
            RESET
        </Button>
    );
};
