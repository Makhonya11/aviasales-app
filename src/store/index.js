import { configureStore } from '@reduxjs/toolkit'

import sortReducer from './sortSlice'
import filterReducer from './filterSlice'
import { ticketsReducer } from './ticketSlice'

const store = configureStore({
  reducer: {
    sortType: sortReducer,
    filter: filterReducer,
    tickets: ticketsReducer,
  },
})
export default store
