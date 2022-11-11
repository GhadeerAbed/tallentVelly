import React from 'react'
import { Container1 } from '../../styled/Container'
import PhoneCheck from '../../componants/Verification/PhoneCheck'
import NavBar from '../../componants/Verification/NavBar'
const PhoneCheckPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <PhoneCheck/>
        </Container1>
    </div>
  )
}

export default PhoneCheckPage