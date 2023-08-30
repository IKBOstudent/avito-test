import { Button } from '@gravity-ui/uikit';

export const ResetFiltersButton = () => {
    const handleClick = () => {
        console.log('RESET clicked');
    };

    return (
        <Button view="flat" size="l" onClick={handleClick}>
            RESET
        </Button>
    );
};
