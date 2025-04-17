import { configureStore, createSlice } from '@reduxjs/toolkit'
import sortReducer from './sortSlice'
import filterReducer from './filterSlice'
import { loggerMiddleware } from './Middleware'
import { ticketsReducer } from './ticketSlice'

const store = configureStore({
  reducer: {
    sortType: sortReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
  },
})
export default store
