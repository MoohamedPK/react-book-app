import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLogged: false, name: "moahmed hassani"},
    reducers: {
        logIn : (state) => {
            state.isLogged = !state.isLogged;
        }
    }
})

export default authSlice.reducer;
export const {logIn} = authSlice.actions;