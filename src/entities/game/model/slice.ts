import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
});

export const gameReducer = gameSlice.reducer;
