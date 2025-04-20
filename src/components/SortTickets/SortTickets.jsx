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
        switch (e.target.textContent) {
          case 'Самый дешевый':
            return dispatch(cheapest()), dispatch(sortByPrice())

          case 'Самый быстрый':
            return dispatch(fastest()), dispatch(sortByDuration())

          default:
            return dispatch(optimal()), dispatch(sortOptimal())
        }
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
