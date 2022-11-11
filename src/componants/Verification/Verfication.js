import React,{useState} from 'react'
import {Titleh1,Paragraphp,VerfiyContain ,VerifyButt ,VerifyName ,Verifyp,Pharg1} from '../../styled/Container1'
import { Button1 } from '../../styled/Container'
const Verfication = () => {
  const [disable, setDisable] = useState(true);
  return (
    <div>
        <Titleh1>Verfication</Titleh1>
        <Paragraphp>To use our services, We need to verify your account</Paragraphp>
        <VerfiyContain>
          <div>
          <VerifyName>Email Address</VerifyName>
          <Verifyp>mail@email.com <span>(not verified)</span></Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
        </VerfiyContain>
        <VerfiyContain>
          <div>
          <VerifyName>Phone Number</VerifyName>
          <Verifyp>+972 ******966<span>(not verified)</span></Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
        </VerfiyContain>
        <Pharg1>You can complete the 2 following tasks later</Pharg1>
        <VerfiyContain>
          <div>
          <VerifyName>ID Verification</VerifyName>
          <Verifyp>Identity card - Driver license - Passport</Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
        </VerfiyContain>
        <VerfiyContain>
          <div>
          <VerifyName>Address Verification</VerifyName>
          <Verifyp>mail@email.com <span>(not verified)</span></Verifyp>
          </div>
          <div>
            <VerifyButt>Verify</VerifyButt>
          </div>
          
        </VerfiyContain>
        <Button1 disabled={disable} style={{width:'424px', margin: '40px auto'}}>Continue</Button1>
    </div>
  )
}

export default Verfication