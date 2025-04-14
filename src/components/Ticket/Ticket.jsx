/* eslint-disable */
import { Card } from "@mui/material";
import { useEffect } from "react";
import {addMinutes, format} from "date-fns"
import { formatInTimeZone } from "date-fns-tz";
import './Ticket.scss'

const Ticket = ({ ticketData: { price, carrier, segments } }) => {
const [arrival, depature] = segments
let flyDuration = (duration) =>  format(addMinutes(new Date(0), duration), 'kч mmм')
const depatureTime = (arrivalTime) => formatInTimeZone(arrivalTime, 'UTC', 'HH:mm')
const arrivalTime = (arrivalTime, duration) => format(addMinutes(arrivalTime, duration), 'HH:mm')
const stops = (stops) => {
if (stops.length>0) return stops.join(', ')
  return
}
const stopsCounter = (stops) => {
if (stops.length===1) return '1 ПЕРЕСАДКА'
if (stops.length>1) return `${stops.length} ПЕРЕСАДКИ`
return "БЕЗ ПЕРЕСАДОК"
}

    return (
     <Card className="ticket">
        <div className="head">
          <span>{`${price} P`} </span>
          <img className="logo" src={`https://pics.avs.io/99/36/${carrier}.png`} alt="" />
        </div>
        <div className="info">
          <div className="direction">
            <p>
             {`${arrival.origin}– ${depature.origin}`}
              <span>{depatureTime(arrival.date)} – {arrivalTime(arrival.date, arrival.duration)}</span>
            </p>
          </div>
          <div className="duration">
            <p>
              В ПУТИ
              <span>{flyDuration(arrival.duration)}</span>
            </p>
          </div>
          <div className="stops">
            <p>
              {stopsCounter(arrival.stops)}
              <span>{stops(arrival.stops)}</span>
            </p>
          </div>
        </div>
        <div className="info">
          <div className="direction">
            <p>
            {`${depature.origin}– ${arrival.origin}`}
              <span>{depatureTime(depature.date)} – {arrivalTime(depature.date, depature.duration)}</span>
            </p>
          </div>
          <div className="duration">
            <p>
           В ПУТИ
              <span>{flyDuration(depature.duration)}</span>
            </p>
          </div>
          <div className="stops">
            <p>
            {stopsCounter(depature.stops)}
              <span>{stops(depature.stops)}</span>
            </p>
          </div>
        </div>
     </Card>
   
    );
  };
  export default Ticket