import { createAsyncThunk } from '@reduxjs/toolkit'

import { login as loginApi } from '../../../utils/loginApi/loginApi'

export const loginUser = createAsyncThunk(
  'user/login',
  async (params, { rejectWithValue }) => {
    try {
      const { userId, role } = await loginApi(params.email, params.password)
      console.log("response from backend", userId, " ", role);
      return { userId, role }
    } catch (error) {
      if (!error.response) throw error
      return rejectWithValue(error.response.data)
    }
  }
)
