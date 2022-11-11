import React from 'react'
import { Container1 } from '../../styled/Container'
import EmailVerification from '../../componants/Verification/EmailVerification'
import NavBar from '../../componants/Verification/NavBar'
const EmailVerifiPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <EmailVerification/>
        </Container1>
    </div>
  )
}

export default EmailVerifiPage