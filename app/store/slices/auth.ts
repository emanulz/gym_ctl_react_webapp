import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '..'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  },
})

export const { setUserData } = AuthSlice.actions
export const selectUser = (state: AppState) => state.auth.user
export const selectUserToken = (state: AppState) => state.auth.token

export default AuthSlice.reducer
