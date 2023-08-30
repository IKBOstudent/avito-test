import { Button } from '@gravity-ui/uikit';

import { resetFilters } from '@/entities/filter';
import { useAppDispatch } from '@/shared/lib/hooks';

export const ResetFiltersButton = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(resetFilters());
    };

    return (
        <Button view="flat" size="l" onClick={handleClick}>
            RESET
        </Button>
    );
};
