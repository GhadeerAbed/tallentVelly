import React from 'react'
import Header from '../../componants/Login&signup/Header'
import Signup from '../../componants/Login&signup/Signup'
import {Container1} from '../../styled/Container'
const Signuppage = () => {
  return (
    <div>
      <Container1>
      <Header paragraph ="Create Your Account"/>
      <Signup></Signup>
      </Container1>
    </div>
  )
}

export default Signuppage