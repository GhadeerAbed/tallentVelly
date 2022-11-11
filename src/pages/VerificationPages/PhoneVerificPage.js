import React from 'react'
import { Container1 } from '../../styled/Container'
import PhoneVerification from '../../componants/Verification/PhoneVerification'
import NavBar from '../../componants/Verification/NavBar'
const PhoneVerificPage = () => {
  return (
    <div>
      <NavBar/>
    <Container1>
    <PhoneVerification/>
    </Container1>
    </div>
  )
}

export default PhoneVerificPage