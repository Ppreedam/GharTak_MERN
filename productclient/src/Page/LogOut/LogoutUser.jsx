import React from 'react'
import { useNavigate } from 'react-router-dom';


const LogoutUser = () => {
  const navigate = useNavigate();

  const logoutuser = async () => {
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