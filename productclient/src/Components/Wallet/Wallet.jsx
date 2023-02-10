import * as React from 'react';
import Badge from '@mui/material/Badge';
import WalletIcon from '@mui/icons-material/Wallet';
import styles from "./wallet.module.css"
import { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Wallet() {
    const [email, setEmail] = useState("");
    const [money, setMoney] = useState(0)
    // console.log(email)

    const getwalletfund = (email) => {
        // console.log(email)
        axios.get(`https://sarkari-card.onrender.com/${email}`)
            .then((res) => setMoney(res.data.wallet.balance))
            .catch((err) => (err));
    }

    const ValidUser = async () => {

        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("https://sarkari-card.onrender.com/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        setEmail(data.ValidUserOne.email)
        // console.log(data.ValidUserOne)
    }

    useEffect(() => {

        // setInterval(() => {
            ValidUser();
            getwalletfund(email)
        // }, 3000);
    }, [])




    return (
        <Badge badgeContent={money} color="primary">
            <WalletIcon className={styles.wallet} />

        </Badge>
    );
}
