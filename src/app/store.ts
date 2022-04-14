import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from 'features/auth/authSlice'
import jobReducer from 'features/job/jobSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
