import React, { useState } from "react";
import '../../index.css'
import {
  Logo1,
  Title1,
  ButtonContainer,
  ButtonCreate,
  NavContainer,
  ButtonToegel,
  UlLi,
  LiNavLink,
  Ul,
  LI
} from "../../styled/Container1";
import { Nav } from "../../styled/Container1";
import logo from "../../assest/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLink
          to="/profile"
          style={{
            display: "flex",
            "align-items": "center",
            "align-content": "center",
          }}
        >
          <Logo1 src={logo} alt="logo"></Logo1>
          <Title1>Talents Valley</Title1>
        </NavLink>
        <ButtonToegel
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </ButtonToegel>
        <div style={{'display':'flex','flexDirection':'row'}}>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
        
          <Ul>
            <LI>
              <LiNavLink to="/profile">Home</LiNavLink>
            </LI>
            <LI>
              <LiNavLink to="/profile">Invoices</LiNavLink>
            </LI>
          </Ul>
       
        </div>
        <ButtonCreate type="button">Create</ButtonCreate>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
