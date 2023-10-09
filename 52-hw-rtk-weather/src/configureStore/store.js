import { configureStore } from "@reduxjs/toolkit";
import message from "../slices/messageSlice";
import weatherInfo from "../slices/weatherSlice";

export const store = configureStore({
    reducer: {
        message, weatherInfo
    }
})
