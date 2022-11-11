import React from 'react'
import {Titleh1} from '../../styled/Container1'
import {ImgeV,ParagraphV} from '../../styled/Container1'
const HeaderV = ({img,hedding,pharginfo}) => {
  return (
    <div>
       <Titleh1>{hedding}</Titleh1> 
       <ImgeV src={img} alt="#"></ImgeV>
       <ParagraphV>{pharginfo}</ParagraphV>
    </div>
  )
}

export default HeaderV