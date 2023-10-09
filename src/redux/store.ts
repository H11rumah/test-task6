import { configureStore } from "@reduxjs/toolkit";
import aviaSlice from "./slices/aviaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        avia: aviaSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
