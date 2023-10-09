import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cityFrom: "",
    cityTo: "",
    dateFrom: "",
    dateTo: "",
};

export const aviaSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCityFrom: (state, action) => {
            state.cityFrom = action.payload;
        },

        setCityTo: (state, action) => {
            state.cityTo = action.payload;
        },

        setDateFrom: (state, action) => {
            state.dateFrom = action.payload;
        },

        setDateTo: (state, action) => {
            state.dateTo = action.payload;
        },
    },
});

export const { setCityFrom, setCityTo, setDateFrom, setDateTo } = aviaSlice.actions;

export default aviaSlice.reducer;
