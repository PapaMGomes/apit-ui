import { configureStore } from '@reduxjs/toolkit'
import { reducers as reducer } from '@/store/reducers'

// const persistConfig = { key: 'root' }

const store = configureStore({ reducer })

export default store
