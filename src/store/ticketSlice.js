/* eslint-disable */
import {createSlice,createAsyncThunk,configureStore, createSelector } from "@reduxjs/toolkit";


  import { getTickets, getId } from '../utilities/AviaApiClient'
  
  
  export const fetchTickets = createAsyncThunk(
    "tickets/fetchTickets",
    async (_, {dispatch}) => {
      await getId()
      let stop = false
      while(!stop) {
        const data = await getTickets();
        stop = data.stop
        dispatch(appendTickets(data.tickets))
      }
      
    }
  );

export const visibleTickets = (tickets, count) => createSelector(
  [ tickets, count],
  (tickets, count) => tickets.slice(0, count)
)

  
  export const ticketsSlice = createSlice({
    name: "tickets",
    initialState: {
      isLoading: false,
      isError: false,
      tickets: [],
      stop:false,
      visibleCount:5,
    },
    reducers: {
      appendTickets: (state, action) => {state.tickets.push(...action.payload.sort((a,b) => a.price-b.price))},
      getMoreTickets: (state) => {state.visibleCount = state.visibleCount +5},
      sortByPrice: (state) => {state.tickets = state.tickets.sort((a,b) => a.price-b.price)},
      sortByDuration: (state) => {state.tickets = state.tickets.sort((a,b) => (a.segments[0].duration +a.segments[1].duration)-(b.segments[0].duration +b.segments[1].duration))},
      sortOptimal: (state) => {state.tickets = state.tickets.sort((a,b) => 
        a.price !== b.price
        ? a.price-b.price
        :(a.segments[0].duration +a.segments[1].duration)-
        (b.segments[0].duration +b.segments[1].duration)
       )}, 
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
      });
      /*builder.addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets.push(...action.payload.tickets)
        state.stop = action.payload.stop
        
      });*/
      builder.addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
    },
  });

  export const {appendTickets, getMoreTickets, sortByPrice, sortByDuration, sortOptimal} = ticketsSlice.actions

  export const ticketsReducer = ticketsSlice.reducer