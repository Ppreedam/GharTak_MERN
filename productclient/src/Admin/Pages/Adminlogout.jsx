import React from 'react'
import { useNavigate } from 'react-router-dom';


const Adminlogout = () => {
    const navigate = useNavigate();

    const logoutuser = async () => {
        localStorage.removeItem("adminusersdatatoken");
        navigate("/")
    }
    return (
        <div onClick={logoutuser}>
            Logout
        </div>
    )
}

export default Adminlogout