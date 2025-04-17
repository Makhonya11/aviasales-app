import { Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cheapest, fastest, optimal } from '../../store/sortSlice'
import { sortByPrice, sortByDuration, sortOptimal } from '../../store/ticketSlice'
import './SortTickets.scss'
const SortTickets = () => {
  const value = useSelector((state) => state.sortType.value)
  const dispatch = useDispatch()
  return (
    <Tabs
      value={value}
      onChange={(e) => {
        e.target.textContent === 'Самый дешевый'
          ? (dispatch(cheapest()), dispatch(sortByPrice()))
          : e.target.textContent === 'Самый быстрый'
            ? (dispatch(fastest()), dispatch(sortByDuration()))
            : (dispatch(optimal()), dispatch(sortOptimal()))
      }}
      role="navigation"
    >
      <Tab label="Самый дешевый" />
      <Tab label="Самый быстрый" />
      <Tab label="Оптимальный" />
    </Tabs>
  )
}
export default SortTickets
