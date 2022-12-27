import React from 'react'
import {GridContainer} from '../../styled/Container2.js'
import Navlink  from './Navlink'
const InvoiceHome = () => {
  return (
    <div style={{marginTop:"100px"}}>
     <GridContainer>
          <div className='grid-item1'>
            <Navlink/>
          </div> 
           <div className='grid-item2'>
            hello
          </div>
          <div className='grid-item3'>
            hello
          </div>
         
     </GridContainer>
    </div>
  )
}

export default InvoiceHome