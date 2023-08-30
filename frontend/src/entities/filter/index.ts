export {
    type TFilter,
    type TFilterTypes,
    type TGenre,
    type TPlatform,
    type TSort,
} from './model/types';

export { platformVars, genreVars, sortVars } from './model/constants';

export {
    filterReducer,
    resetFilters,
    setSort,
    setFilter,
    selectSort,
    selectFilter,
} from './model/slice';
