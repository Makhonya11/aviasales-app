import { useState, useEffect } from 'react'
import SortTickets from '../SortTickets/SortTickets'
import TicketList from '../TicketList/TicketList'
import OtherTickets from '../OtherTickets/OtherTickets'
import StopsFilters from '../StopsFilters/StopsFilters'
import { getTickets, getId } from '../../utilities/AviaApiClient'
import logo from '../../assets/Logo.png'

import './App.css'

const App = () => {

  return (
        <div className='body'>

  <img src={logo} alt="" className='head-logo'/>
  <aside>
  <StopsFilters/>
</aside>
  <main>
  <SortTickets/>
<TicketList/>
<OtherTickets/>
</main>

        </div>
  )
}

export default App
