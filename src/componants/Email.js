import React from 'react'
import FormButton from './FormButton'

import Footer from './Footer'
import {Paragraph1 ,CodeInput,CodeInput1} from '../styled/Container.js'
const Email = ({handleSubmit}) => {
  return (
    <div>
        
        <Paragraph1>We have sent you an email that contains a code to
         reset your password</Paragraph1>
         <div style={{'margin-top':'10%' , 'margin-bottom':'20%'}}>
         <CodeInput id="code" type="text"></CodeInput>
         <CodeInput id="code" type="text"></CodeInput>
         <CodeInput id="code" type="text"></CodeInput>
         <CodeInput1 id="code" type="text"></CodeInput1>
         <CodeInput id="code" type="text"></CodeInput>
         <CodeInput id="code" type="text"></CodeInput>
         </div>
         <FormButton text='Continue' handleSupmit={handleSubmit} linkUrl='/RePassPage'></FormButton>
         <Footer paragraph1="Didn't get the code?" linkName='Resend' linkUrl="/Emailpage "></Footer>
    </div>
  )
}

export default Email