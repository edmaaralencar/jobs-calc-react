import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import jobService from './jobService'

const initialState: any = {
  jobs: [],
  isError: false,
  isLoading: false,
  message: ''
}

export const getJobs = createAsyncThunk('jobs/get', async (_, thunkAPI) => {
  try {
    return await jobService.getJobs()
  } catch (error: any) {
    const message: string =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const createJob = createAsyncThunk(
  'jobs/create',
  async (jobData: any, thunkAPI) => {
    try {
      return await jobService.createJob(jobData)
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

export const deleteJob = createAsyncThunk(
  'jobs/delete',
  async (jobId: string, thunkAPI) => {
    try {
      return await jobService.deleteJob(jobId)
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

export const updateJob = createAsyncThunk(
  'jobs/update',
  async (jobInfo: any, thunkAPI) => {
    try {
      return await jobService.updateJob(jobInfo)
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

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    reset: state => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(getJobs.pending, state => {
        state.isLoading = true
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.isLoading = false
        state.jobs = action.payload
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createJob.pending, state => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.jobs.push(action.payload)
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteJob.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.jobs = state.jobs.filter((job: any) => job._id !== action.payload)
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateJob.pending, state => {
        state.isLoading = true
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false
        state.jobs = state.jobs.map((job: any) =>
          job.id === action.payload.id ? action.payload : job
        )
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = jobSlice.actions
export default jobSlice.reducer
