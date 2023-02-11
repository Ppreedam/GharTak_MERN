import React, { useEffect, useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import styles from "./Adminlogin.module.css"



const Adminlogin = () => {
    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            // console.log("user login succesfully done");


            const data = await fetch("https://ghartak.onrender.com/adminlogin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("adminusersdatatoken",res.result.token);
                setTimeout(()=>{
                    // window.location.reload()
                    navigate("/adminhome")
                 },2000)
                
                
                setInpval({...inpval,email:"",password:""});
                toast.success("Login Successfully done 😃!", {
                    position: "top-center"
                });
            }
        }

        
        
        
    }
    

    return (
        <>
            <section className={styles.section}>
                <div className={styles.form_data}>
                    <div className={styles.form_heading}>
                        <h1>Welcome To Admin_Pannel</h1>
                        
                    </div>

                    <form>
                        <div className={styles.form_input}>
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        
                        <div className={styles.form_input}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.two}>
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className={styles.showpass} onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className={styles.btn} onClick={loginuser}>Admin Login</button>
                        {/* <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p> */}
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Adminlogin