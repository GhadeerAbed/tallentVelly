
import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [buttonText, setButtonText] = useState(true);
    const [buttonText1, setButtonText1] = useState(true);
    const [verify, setVerifyText] = useState('not verified');
    const [verify1, setVerifyText1] = useState('not verified');
    const [disabled , setDisabled] = useState(true)
  
    return (
        <Context.Provider value={{ buttonText, setButtonText,verify, setVerifyText,verify1, setVerifyText1,buttonText1, setButtonText1,disabled,setDisabled}}>
            {children}
        </Context.Provider>
    );
};