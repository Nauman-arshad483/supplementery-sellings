import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/features/auth/authSlice";
import profileSlice from "./features/profile/profileSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,  
  }
});

export default store;