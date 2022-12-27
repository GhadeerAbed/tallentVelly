import React from 'react'
import {NavLink} from 'react-router-dom';
import { NavContainer } from '../../styled/Container2'




const Navlink = () => {
  return (
    <NavContainer>
       <NavLink to="/home" style={({isActive})=>{
        return {color:isActive? 'red' :'black'}
       }}>Home</NavLink>
       <NavLink to="/invoices">Invoices</NavLink>
       <NavLink to="/users">Users</NavLink>
    </NavContainer>
  )
}

export default Navlink