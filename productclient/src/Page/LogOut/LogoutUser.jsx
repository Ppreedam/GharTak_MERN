import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../ContextProvider/Context';

const LogoutUser = () => {
    const { logindata, setLoginData } = useContext(LoginContext);
    const navigate = useNavigate();

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    
      localStorage.removeItem("usersdatatoken");
      
      navigate("/")
    
  }
  return (
    <div onClick={logoutuser}>
        Logout
    </div>
  )
}

export default LogoutUser