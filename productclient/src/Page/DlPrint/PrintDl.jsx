import React from 'react'
import { useState } from 'react';
import styles from "./PrintDl.module.css"
import { Stack, TextField, Box, Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Fullscreenmodal from '../Fullscreenmodal/Fullscreenmodal';


const initialdata = {
    date: ""
}

const PrintDl = () => {
    const [data, setData] = useState(initialdata)
    const [valid, setValid] = useState("")
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("dldetails"));

    const ValidUser = async () => {
        let token = localStorage.getItem("usersdatatoken");

       const res = await fetch("http://localhost:5000/validuser", {
        // const res = await fetch("https://sarkari-card.onrender.com/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        // setName(data.ValidUserOne.fname)
        setEmail(data.ValidUserOne.email)
        // setBalence(data.ValidUserOne.balance)

    }

    useEffect(() => {
        ValidUser();
    }, [email])

    const deductobjdata = {
        "userId": email,
        "amount": 50
    }

    const DownloadDl = async () => {
       
            axios.post("http://localhost:5000/deductfund", deductobjdata)
            .then((res)=>{
                if(res.status=="200"){
                    alert(res.data.message)
                    // navigate("/finaldldownload")
                    localStorage.setItem("finaldownload",JSON.stringify(user))
                    localStorage.removeItem("dldetails")
                }
            })
            .catch((error)=>{
                if (error.message == "Request failed with status code 400") {
                    alert("Insufficient balance in wallet Please Recharge")
                }
            })

    }

    
    function handlevalidity(e) {
        setValid(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    var arr = []
    function submit() {
        // console.log(data)
        arr.push(data)
        localStorage.setItem("validitydate", JSON.stringify(arr))
    }
    return (
        <>
            <div className={styles.parentbox}>
                <div className={styles.mainbox}>
                    {
                        user && user.map((el) => {

                            return <div>
                                <div className={styles.container}>
                                    <img src="asset/Dl_front_demo.jpeg" alt="Snow" className={styles.imgsize} />

                                    <div className={styles.topleft}>Issued by Government of {el.newstate}</div>
                                    <div className={styles.dlnum}><strong>{el.dlno}</strong></div>
                                    <div className={styles.issuedate}>{el.issue_date}</div>
                                    <div className={styles.validitint}>{valid}</div>
                                    <div className={styles.validititr}>{valid}</div>
                                    <div className={styles.statelogo}><strong>{el.statelogo}</strong></div>
                                    <div className={styles.profileimg}>
                                        <img src={el.photo} alt="profile" className={styles.profilephoto} />
                                    </div>
                                    <div className={styles.profilesignbox}>
                                        <img src={el.sign} alt="sign" className={styles.profilesign} />
                                    </div>
                                    <div className={styles.name}>{el.name}</div>
                                    <div className={styles.birth}>{el.dob}</div>
                                    <div className={styles.swd}>{el.s_w_d}</div>
                                    <div className={styles.address}>{el.address}</div>
                                    <div className={styles.bg}>{el.blood_group}</div>
                                    <div className={styles.organdonar}>{el.orgon_donar}</div>
                                    <div className={styles.verticaltext}>
                                        <strong>Date of First Issue {el.issue_date}</strong>
                                    </div>
                                </div>

                                {/* back page */}
                                {

                                }

                                <div className={styles.container}>
                                    <img src="asset/Dl_back_demo.jpeg" alt="Snow" className={styles.imgsize} />
                                    <div className={styles.dlnumbackpage}><strong>DL No : {el.dlno}</strong></div>
                                    <div className={styles.qr}>
                                        <img className={styles.profilephoto} src={el.qr} alt="" />
                                    </div>
                                    <div className={styles.mcwg}><strong>{el.mcwg}</strong></div>
                                    <div className={styles.mcwgissuedby}><strong>{el.mcwg_issueby}</strong></div>
                                    <div className={styles.mcwgissue_date_back}><strong>{el.mcwg_issuedate}</strong></div>
                                    <div className={styles.mcwg_cat}><strong>{el.mcwg_cat}</strong></div>

                                    {/* End mcwg */}
                                    <div className={styles.lmv}><strong>{el.lmv}</strong></div>
                                    <div className={styles.lmvissuedby}><strong>{el.lmv_issueby}</strong></div>
                                    <div className={styles.lmvissue_date_back}><strong>{el.lmv_issuedate}</strong></div>
                                    <div className={styles.lmv_cat}><strong>{el.lmv_cat}</strong></div>
                                    {/* end of lmv */}
                                    <div className={styles.transport}><strong>{el.transport}</strong></div>
                                    <div className={styles.trissuedby}><strong>{el.transport_issueby}</strong></div>
                                    <div className={styles.trissue_date_back}><strong>{el.transport_issuedate}</strong></div>
                                    <div className={styles.tr_cat}><strong>{el.transport_cat}</strong></div>

                                    <div className={styles.dto}><strong>{el.issuedby}</strong></div>



                                </div>
                                <div className={styles.price}>
                                    <h3>Price :- ₹ 50</h3>
                                </div>

                            </div>
                        })
                    }

                </div>

                <div className={styles.secondbodybox}>
                    <Box className={styles.validdatebox}>
                        <Box>
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlevalidity(e)}
                                name="date"
                                label="Enter your Expiry Date DD-mm-yyyy"
                                multiline

                            />
                        </Box>
                        <Stack>
                            <Button variant="contained" mt="20px" onClick={submit} >
                                Submit
                            </Button>
                        </Stack>
                    </Box>


                    <Stack className={styles.downloadbox}>
                        <Button variant="contained" className={styles.downloadbtn} onClick={DownloadDl} >
                            Makepayment
                        </Button>
                    </Stack>

                    <Fullscreenmodal/>
                </div>

            </div>
        </>
    )
}

export default PrintDl