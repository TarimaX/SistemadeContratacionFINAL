import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.slice'

export default configureStore({
  reducer: {
    auth: authReducer
  },
})