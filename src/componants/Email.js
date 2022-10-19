import React from 'react'
import FormButton from './FormButton'
import Header from './Header'
import Footer from './Footer'
const Email = ({handleSubmit}) => {
  return (
    <div>
        <Header paragraph ="Check Your Email"/>
        <p>We have sent you an email that contains a code to
         reset your password</p>
         <FormButton text='Continue' handleSupmit={handleSubmit}></FormButton>
         <Footer paragraph1="Didn't get the code?" linkName='Resend' linkUrl="/Resend"></Footer>
    </div>
  )
}

export default Email