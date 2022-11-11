import React from 'react'
import { Container1 } from '../../styled/Container'
import EmailCheck from '../../componants/Verification/EmailCheck'
import NavBar from '../../componants/Verification/NavBar'
const EmailCheckPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <EmailCheck/>
        </Container1>
    </div>
  )
}

export default EmailCheckPage