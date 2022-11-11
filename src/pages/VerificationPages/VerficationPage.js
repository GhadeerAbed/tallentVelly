import React from 'react'
import { Container1 } from '../../styled/Container'
import Verfication from '../../componants/Verification/Verfication'
import NavBar from '../../componants/Verification/NavBar'
const VerficationPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <Verfication/>
        </Container1>
    </div>
  )
}

export default VerficationPage