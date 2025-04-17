import { Card } from '@mui/material'
import { useEffect } from 'react'
import { addMinutes, format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import styles from './Ticket.module.scss'

const Ticket = ({ ticketData: { price, carrier, segments } }) => {
  const [arrival, depature] = segments
  let flyDuration = (duration) => format(addMinutes(new Date(0), duration), 'kч mmм')
  const depatureTime = (arrivalTime) => formatInTimeZone(arrivalTime, 'UTC', 'HH:mm')
  const arrivalTime = (arrivalTime, duration) => format(addMinutes(arrivalTime, duration), 'HH:mm')
  const stops = (stops) => {
    if (stops.length > 0) return stops.join(', ')
    return
  }
  const stopsCounter = (stops) => {
    if (stops.length === 1) return '1 ПЕРЕСАДКА'
    if (stops.length > 1) return `${stops.length} ПЕРЕСАДКИ`
    return 'БЕЗ ПЕРЕСАДОК'
  }

  return (
    <Card className={styles.ticket}>
      <span className={styles.price}>{`${price} P`} </span>
      <img className={styles.logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="" />

      <div className={styles.directionTo}>
        <p>{`${arrival.origin}– ${depature.origin}`}</p>
        <span>
          {depatureTime(arrival.date)} – {arrivalTime(arrival.date, arrival.duration)}
        </span>
      </div>
      <div className={styles.durationTo}>
        <p>В ПУТИ</p>
        <span>{flyDuration(arrival.duration)}</span>
      </div>
      <div className={styles.stopsTo}>
        <p>{stopsCounter(arrival.stops)}</p>
        <span>{stops(arrival.stops)}</span>
      </div>

      <div className={styles.directionFrom}>
        <p>{`${depature.origin}– ${arrival.origin}`}</p>
        <span>
          {depatureTime(depature.date)} – {arrivalTime(depature.date, depature.duration)}
        </span>
      </div>
      <div className={styles.durationFrom}>
        <p>В ПУТИ</p>
        <span>{flyDuration(depature.duration)}</span>
      </div>
      <div className={styles.stopsFrom}>
        <p>{stopsCounter(depature.stops)}</p>
        <span>{stops(depature.stops)}</span>
      </div>
    </Card>
  )
}
export default Ticket
