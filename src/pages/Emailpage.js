import React from 'react'
import Header from '../componants/Header'
import Email from '../componants/Email'
import {Container2}from '../styled/Container.js'
const Emailpage = () => {
  return (
    <div>
      <Header paragraph ="Check Your Email"/>
      <Container2>
        <Email></Email>
      </Container2>
    </div>
  )
}

export default Emailpage