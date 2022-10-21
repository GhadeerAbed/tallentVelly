import React from 'react'
import {Button}from '../styled/Container.js'
import {Link} from 'react-router-dom'
export default function FormButton({
    handleSubmit,
    action='submit',
    text,
    linkUrl="#"
}){
    
    return(
        <div>
            <Button
                type={action}
                onSubmit={handleSubmit}
            >

               <Link to={linkUrl} >{text}</Link> 
            </Button>
        
        </div>
    )
}