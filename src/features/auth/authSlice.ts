/* eslint-disable no-empty */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

export type Login = {
  email: string
  password: string
}

export type UpdateProfileDto = {
  teste: string
}

const initialState: any = {
  user: user ? JSON.parse(user) : null,
  token: token,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const login = createAsyncThunk(
  'auth/login',
  async (user: Login, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
      const message: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const updateProfile = createAsyncThunk(
  'auth/update',
  async (user: any, thunkAPI) => {
    try {
      return await authService.updateProfile(user)
    } catch (error: any) {
      const message: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false
        state.isSuccess = true
        state.user = { ...action.payload.user }
        state.token = action.payload.jwtToken
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.user = null
        state.token = null
        state.message = action.payload
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.user = null
        state.token = null
        state.message = action.payload
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
        state.token = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
