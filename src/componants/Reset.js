import React from 'react'
import check from '../assest/check-mark.png'
import FormButton from './FormButton'
const Reset = ({handleSubmit}) => {
  return (
    <div> 
      <img src={check} alt='#'></img>
      <h2>Password Reset</h2>
      <p>Your Password has been Successfully Reset.
Click Below To Login</p>
 <FormButton text='Sign In ' handleSupmit={handleSubmit} />
    </div>
  )
}

export default Reset