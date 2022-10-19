import React from 'react'
import FormButton from './FormButton'
const Forget = ({handleSubmit}) => {
  return (
    <div>
       <p>We'll send a code to your email to reset your password</p>
       <FormButton text='Send Code' handleSupmit={handleSubmit} />
    </div>
  )
}

export default Forget