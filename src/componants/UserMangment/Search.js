import React, { useState } from "react";
// import Input from '../Login&signup/Input'
// import { useForm } from "react-hook-form";
import {
  BiSearchIcon,
  HiOutline,
  ListContainer,
} from "../../styled/Container2";
import { FixedInputClass } from "../../styled/Container";

const checkList = ["Team members", "Blocked", "Oldest to newest", "All"];
const Search = ({ setSearch }) => {
  
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  

  return (
    <div>
      <form>
        <div>
          <BiSearchIcon />
          <HiOutline onClick={handleClick} />
          <FixedInputClass
            name="search"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{ paddingLeft: "70px", fontSize: "16px", color: "#000000" }}
          />
          {open ? (
            <ListContainer>
              {checkList.map((item, index) => (
                <div key={index} className="lilist">
                  <input value={item} type="checkbox" className="checklist"/>
                  <span >{item}</span>
                </div>
              ))}
            </ListContainer>
          ) : null}
    
        </div>
      </form>
    </div>
  );
};

export default Search;
