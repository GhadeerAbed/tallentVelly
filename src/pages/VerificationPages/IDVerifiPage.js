import React from 'react'
import { Container1 } from '../../styled/Container'
import IDVerification from '../../componants/Verification/IDVerification'
import NavBar from '../../componants/Verification/NavBar'
const IDVerifiPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <IDVerification/>
        </Container1>
    </div>
  )
}

export default IDVerifiPage