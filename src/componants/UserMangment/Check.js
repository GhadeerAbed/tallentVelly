import React,{useState} from 'react'
import {  ListContainer1 } from "../../styled/Container2";
import { BsThreeDotsVertical } from "react-icons/bs";
const checkListTag = ["Set as User", "Block", "Delete"];


const Check = () => {
    const [openTag, setOpenTag] = useState(false);
  return (
    <div>
        <button>
                 <BsThreeDotsVertical
                      onClick={() => {
                        setOpenTag(!openTag);
                      }}
                    />
                  </button>
                  {openTag ? (
                    <ListContainer1>
                      {checkListTag.map((items) => (
                        <div  className="lilist">
                          <button>
                          <span>{items}</span>
                          </button>
                          
                        </div>
                      ))}
                    </ListContainer1>
                  ) : null}
             
    </div>
  )
}

export default Check