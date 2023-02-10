import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    avatar: {
        profileAvatar: '',
        lastName: '',
    },
    personalInformation: {
        companyName: '',
        nameLastName: '',
        profleEmail: '',
        profilePhone: '',

    },
    password: {
        profilePassword: '',
    },
    loading: false,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        updatePersonalInformationRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        updatePersonalInformationSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.personalInformation = action.payload;
        },
        updatePersonalInformationFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updatePasswordRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        updatePasswordSuccess: (state, action) => {
            state.password = action.payload;
        },
        updatePasswordFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    },
});

export const {
    updatePersonalInformationRequest,
    updatePersonalInformationSuccess,
    updatePersonalInformationFailure,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFailure,
    updateEmail,
    updateAboutMe,
} = profileSlice.actions;

export default profileSlice.reducer;
