import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    role: null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: state => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {

            state.userId = action.payload.userId;
            state.role = action.payload.role;
            state.loading = false;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: state => {
            state.userId = null;
            state.role = null;
        }
    }

});
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export const loginLoading = state => state.auth.loading
export default authSlice.reducer;