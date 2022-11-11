import React from 'react'
import HeaderV from './HeaderV'
import Check from '../../assest/check-mark.png'
import {Checkp} from '../../styled/Container1'
import {Button1} from '../../styled/Container'
const PhoneCheck = () => {
  return (
    <div>
        <HeaderV img={Check} hedding={'Phone Verification'}/>
        <Checkp>Your Phone Number has been Verified <br/>Successfully</Checkp>
        <Button1 style={{width:'400px',margin:'90px auto'}}>Continue</Button1>
    </div>
  )
}

export default PhoneCheck