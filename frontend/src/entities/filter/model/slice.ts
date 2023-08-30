import { createSlice } from '@reduxjs/toolkit';
import { type TSort, sortVars, TFilter, TFilterTypes } from '@/entities/filter';

interface IFilterState {
    sort: TSort;
    filters: TFilter<TFilterTypes>[];
}

const initialState: IFilterState = {
    sort: sortVars[0],
    filters: [
        { name: 'genre', value: null },
        { name: 'platform', value: null },
    ],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        resetFilters: state => {
            state.filters = state.filters.map(filter => ({
                name: filter.name,
                value: null,
            }));
        },
        setSort: (state, { payload }: { payload: TSort }) => {
            state.sort = payload;
        },
        setFilter: (state, { payload }: { payload: TFilter<TFilterTypes> }) => {
            const index = state.filters.findIndex(
                filter => filter.name === payload.name
            );

            state.filters[index].value = payload.value;
        },
    },
});

export const { resetFilters, setSort, setFilter } = filterSlice.actions;

export const selectSort = (state: RootState) => state.filterReducer.sort;

export const selectFilter = (state: RootState, name: TFilterTypes) =>
    state.filterReducer.filters.find(filter => filter.name === name)?.value;

export const filterReducer = filterSlice.reducer;
