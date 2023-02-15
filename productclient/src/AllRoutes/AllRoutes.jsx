import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from '../Page/Home/Home'
import Login from '../Page/Login/Login'
import Register from '../Page/Register/Regidter'
import Error from '../Page/Error/Error'
import { useContext } from 'react'
import { LoginContext } from '../ContextProvider/Context'
import CreateBlog from '../Admin/Pages/CreateBlog/CreateBlog'
import AdminHome from '../Admin/Pages/Home/AdminHome'
import MyAccount from '../Components/MyAccount/MyAccount'


import Adminlogin from '../Admin/Pages/AdminLogin/Adminlogin'
import Product from '../Page/Product/Product'
import SinglePage from '../Page/Singlepages/Singlepage'
import Checkout from '../Page/CheckoutPage/Checkout'

const AllRoutes = () => {
  // const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  const { admin, setAdmin } = useContext(LoginContext);
  // console.log(admin)
  // console.log(logindata)


  const AdminValidUser = async () => {
    let token = localStorage.getItem("adminusersdatatoken");
    // console.log("admin",token)

    const res = await fetch("https://ghartak.onrender.com/adminvaliduser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();
    if (data.status == 401 || !data) {
      // console.log("user not valid");
    } else {
      // console.log("user verify");
      setAdmin(data)
      // history("/dash");
    }

  }


  const ValidUser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    

    const res = await fetch("https://ghartak.onrender.com/ValidUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();
    if (data.status == 401 || !data) {
      // console.log("user not valid");
    } else {
      // console.log("user verify");
      setLoginData (data)
      // history("/dash");
    }

  }
  

  useEffect(() => {
    // setTimeout(() => { 
    ValidUser();
    AdminValidUser();
    // }, 2000)

  }, [])
  console.log("logindata",logindata)
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product"
            element={logindata ? <Product/> : <Login />} />
          {/* <Route path="/productDetails/:id" element={logindata ? <SinglePage/> : <Login />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/myaccount' element={logindata ? <MyAccount /> : <Login />} />
          <Route path='*' element={<Error />} />
          {/* <Route path='/finaldldownload' element={<FinalDldownload />} /> */}
          <Route path="/productDetails/:id" element={<SinglePage/> } />
          <Route path='/checkout' element={<Checkout/>}/>

          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/admindashboard' element={admin ? <AdminHome /> : <Adminlogin />} />
          <Route path='/createblog' element={admin ? <CreateBlog/> : <Adminlogin />} />
        </Routes>
      </div>
    </>
  )
}

export default AllRoutes