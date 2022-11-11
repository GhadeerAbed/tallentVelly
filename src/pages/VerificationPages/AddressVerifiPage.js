import React from 'react'
import { Container1 } from '../../styled/Container'
import AddressVerification from '../../componants/Verification/AddressVerification'
import NavBar from '../../componants/Verification/NavBar'
const AddressVerifiPage = () => {
  return (
    <div>
        <NavBar/>
        <Container1>
        <AddressVerification/>
        </Container1>
    </div>
  )
}

export default AddressVerifiPage