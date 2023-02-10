import React, { createContext, useState } from 'react'


export const LoginContext = createContext("");

const Context = ({children}) => {

    const [logindata,setLoginData] = useState("");
    const [admin , setAdmin] = useState("");

  return (
    <>
    <LoginContext.Provider value={{logindata,setLoginData,admin , setAdmin}}>
        {children}
    </LoginContext.Provider>
    </>
  )
}

export default Context