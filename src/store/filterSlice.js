/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        parent:false,
        child: {
            'Без пересадок': false,
              '1 пересадка': false,
              '2 пересадки': false,
              '3 пересадки': false,
        },
    },
    reducers: {
        updateAllFiltr (state) {
        
        const newCheckedState = !state.parent;
        state.parent = newCheckedState;
        const updatedItems = Object.keys(state.child).reduce((acc, key) => {
          acc[key] = newCheckedState;
          return acc;
        }, {});
        state.child = updatedItems
        },
        updateOneFilter (state, action) {
            const {key} = action.payload
            if (key in state.child) state.child[key] = !state.child[key]
            const allCheked = Object.values(state.child).every(Boolean)
           state.parent = allCheked;
            
        }
    }
})

export const {updateAllFiltr, updateOneFilter} = filterSlice.actions
export default filterSlice.reducer