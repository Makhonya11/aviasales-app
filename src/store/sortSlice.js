import { createSlice } from '@reduxjs/toolkit'

const sortSlice = createSlice({
  name: 'sortType',
  initialState: { value: 0 },
  reducers: {
    cheapest: (state) => {
      state.value = 0
    },
    fastest: (state) => {
      state.value = 1
    },
    optimal: (state) => {
      state.value = 2
    },
  },
})

export const { cheapest, fastest, optimal } = sortSlice.actions
export default sortSlice.reducer
