import React from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
const EmailCheck = () => {
  return (
    <div>
        <HeaderV img={Check} hedding={'Email Verification'}/>
        <Checkp>Your Email has been Verified <br/>Successfully</Checkp>
        <Button1 style={{width:'400px',margin:'90px auto'}}>Continue</Button1>
    </div>
  )
}

export default EmailCheck