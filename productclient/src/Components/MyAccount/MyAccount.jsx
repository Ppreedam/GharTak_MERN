import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styles from "./MyAccount.module.css"

const MyAccount = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState("");
    const [balance , setBalence] = useState();


    const getwalletfund = (email)=>{
        // console.log(email)
        axios.get(`http://localhost:5000/getfund/${email}`)
            .then((res) => setBalence(res.data.wallet.balance))
            .catch((err) => (err));
    }

    const ValidUser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("http://localhost:5000/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        setName(data.ValidUserOne.fname)
        setEmail(data.ValidUserOne.email)
        // setBalence(data.ValidUserOne.balance)

    }

    useEffect(() => {
        ValidUser();
        getwalletfund(email)
    }, [email])

    // console.log(data)
    return (
        <div className={styles.myaccountbox}>
                <h1>Name:-{name}</h1>
                <p>Email :-{email}</p>
                <p>Balence :-{balance} ₹</p>
        </div>
    )
}

export default MyAccount