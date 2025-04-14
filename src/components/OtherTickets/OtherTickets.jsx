import { Button } from "@mui/material"
import { getMoreTickets } from "../../store/ticketSlice"
import { useDispatch } from "react-redux"
import './OtherTickets.css'

const OtherTickets = () => {
const dispatch = useDispatch()
return (
    <Button
    variant="contained"
    className="other-tickets"
    onClick={() => dispatch(getMoreTickets())}
    >
Показать еще 5 билетов!
    </Button>
)
}

export default OtherTickets