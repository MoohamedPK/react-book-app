import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../slices/bookSlices';
import authReducer from "../slices/authSlice";

const store = configureStore({
    reducer:{
        book: bookReducer,
        auth: authReducer,
    }
})

export default store;