import Ticket from '../Ticket/Ticket'
import { CircularProgress, Alert } from '@mui/material'
import './TicketList.css'
import { fetchTickets, visibleTickets, sortByPrice } from '../../store/ticketSlice'
import { getId } from '../../utilities/AviaApiClient'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TicketList = () => {
  let id = 0
  const dispatch = useDispatch()
  const count = (state) => state.tickets.visibleCount
  const filters = useSelector((state) => state.filter.child)
  const noneStop = Object.values(filters)[0]
  const oneStop = Object.values(filters)[1]
  const twoStops = Object.values(filters)[2]
  const threeStops = Object.values(filters)[3]

  const tickets = (state) => {
    const items = state.tickets.tickets
    return threeStops
      ? items.filter((el) => (el.segments[0].stops.length === 3) & (el.segments[1].stops.length <= 3))
      : twoStops
        ? items.filter((el) => (el.segments[0].stops.length === 2) & (el.segments[1].stops.length <= 2))
        : oneStop
          ? items.filter((el) => (el.segments[0].stops.length === 1) & (el.segments[1].stops.length <= 1))
          : noneStop
            ? items.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length < 1)
            : items
  }

  const isFiltered = Object.values(filters).some(Boolean)

  useEffect(() => {
    dispatch(fetchTickets())
    dispatch(sortByPrice())
  }, [])

  const ticketList = useSelector(visibleTickets(tickets, count))
  if (ticketList.length > 0 && isFiltered)
    return (
      <div className="ticket-list">
        {ticketList.map((ticket) => (
          <Ticket key={id++} ticketData={ticket} />
        ))}
      </div>
    )
  if (!isFiltered)
    return (
      <Alert variant="outlined" severity="info" className="noResultWarn">
        Рейсов, подходящих под заданные фильтры, не найдено.
      </Alert>
    )
  return <CircularProgress></CircularProgress>
}
//export isFiltered
export default TicketList
