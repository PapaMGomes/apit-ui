import { combineReducers } from '@reduxjs/toolkit'
import loading from './loading.reducer'

export const reducers = { loading }
export default combineReducers(reducers)
