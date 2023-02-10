import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./AddDlDetails.module.css";


const initialValue = {
  dob: '',
  dl: '',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const AddDlDetails = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(initialValue);
  const { dob, dl } = user;

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const addUserDetails = async () => {
    setLoading(true)
    const [yyyy, mm, dd] = dob.trim().split("-")
    const newdob = dd + "-" + mm + "-" + yyyy

    //   console.log(newdob)
    function stringToBase64(string) {
      return btoa(string);
    }

    const dln = stringToBase64(dl);
    const dobn = stringToBase64(newdob);

    const encryptobj = {
      dobn,
      dln
    }
      console.log(encryptobj)
    var arr = [];
    
    return await axios.post("http://localhost:5000/adddldetails", encryptobj)
    // return await axios.post("ttp://localhost:5000/adddldetails/adddldetails", encryptobj)
      .then((res) => {
        // console.log(res.data.data)
        setLoading(false)
        arr.push(res.data.data)
        localStorage.setItem("dldetails", JSON.stringify(arr))
        navigate("/printdl")
      })

      .catch((err) => {
        setLoading(false)
        alert(err.response.data.message)
      })

  }
  return (
    <Container className={styles.adddlbox}>
      <h1 variant="h4">Add DL Details</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">DOB</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='dob' value={dob} id="my-input" type='date' />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">DL-No</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='dl' value={dl} id="my-input" />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Submit</Button>
      </FormControl>
      <FormControl>
        {
          loading ? <div className={styles.spinnerbox}><h4>Fetching Your Data...!!!</h4> <img src="asset/barspinner.gif" alt="" /> </div> : ""
        }
      </FormControl>
    </Container>
  )
}

export default AddDlDetails