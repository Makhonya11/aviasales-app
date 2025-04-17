import { Button } from '@mui/material'
import { getMoreTickets } from '../../store/ticketSlice'

import { useDispatch, useSelector } from 'react-redux'
import styles from './OtherTickets.module.css'

const OtherTickets = () => {
  const dispatch = useDispatch()
  const tickets = useSelector((state) => state.tickets.tickets)
  const visibleTicketCounter = useSelector((state) => state.tickets.visibleCount)
  const filters = useSelector((state) => state.filter.child)
  const isFiltered = Object.values(filters).some(Boolean)

  if (tickets.length > visibleTicketCounter && isFiltered)
    return (
      <Button variant="contained" className={styles.otherTickets} onClick={() => dispatch(getMoreTickets())}>
        Показать еще 5 билетов!
      </Button>
    )
  if (!isFiltered) return
}

export default OtherTickets
