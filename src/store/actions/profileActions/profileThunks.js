import { createAsyncThunk } from '@reduxjs/toolkit'

import { storePersonalInformation as storePersonalInformationApi } from '../../../utils/profileAPi/profileApi';
export const storePersonalInformation = createAsyncThunk(
  'user/storePersonalInformation',
  async (params, { rejectWithValue }) => {
    try {
      const response = await storePersonalInformationApi(params)
      console.log("response from backend", response);
      return response
    } catch (error) {
      if (!error.response) throw error
      return rejectWithValue(error.response.data)
    }
  }
)


import { createAsyncThunk } from '@reduxjs/toolkit'

import { storePersonalInformationApi } from '../../../utils/profileAPi/profileApi';
export const storePersonalInformation = createAsyncThunk(
  'user/storePersonalInformation',
  async (params, { rejectWithValue }) => {
    try {
      const response = await storePersonalInformationApi(params.personalInformation, params.endpoint)
      console.log("response from backend", response);
      return response
    } catch (error) {
      if (!error.response) throw error
      return rejectWithValue(error.response.data)
    }
  }
)