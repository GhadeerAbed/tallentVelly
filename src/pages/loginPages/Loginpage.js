import React from 'react'
import Header from '../../componants/Login&signup/Header'
import Login from '../../componants/Login&signup/Login'
import {Container1} from '../../styled/Container'
const Loginpage = () => {
  return (
    <div>
      <Container1>
      <Header paragraph ="Login to Your Account"/>
      <Login></Login>
      </Container1>
    </div>
  )
}

export default Loginpage