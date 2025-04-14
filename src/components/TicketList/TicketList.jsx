/* eslint-disable */
import Ticket from "../Ticket/Ticket"
import './TicketList.css'
import { fetchTickets, visibleTickets, sortByPrice } from "../../store/ticketSlice"
import { getId } from "../../utilities/AviaApiClient"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const TicketList = () => {
   let id = 0
   const dispatch = useDispatch()
   const tickets = (state) => state.tickets.tickets
   const count = (state) => state.tickets.visibleCount

   useEffect(() => {
      dispatch(fetchTickets());
      dispatch(sortByPrice())
   },[])
   
   const ticketList = useSelector(visibleTickets(tickets, count))
   return (
      <div className="ticket-list">
         {ticketList.map((ticket) => (
             <Ticket key={id++} ticketData={ticket} />
))}
        
        
      </div>
   )
    }
    
    export default TicketList