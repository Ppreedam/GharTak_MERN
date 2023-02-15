import styles from "./Checkout.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Addtocart, deletitemaction, Remove } from "../../Redux/Appreducer/action";


const initialdata = {
    firdtname: "",
    lastname: "",
    email: "",
    companyname: "",
    pincode: "",
    city: "",
    streetaddress: "",
    areamark: "",
    mobileno: "",
    alternativemobileno: ""
    
}

function Checkout() {
    const [data, setData] = useState(initialdata)


    const dispatch = useDispatch()
    const [price, setPrice] = useState(0);

    const product = useSelector((state) => state.Appreducer?.cart)
    // console.log(product)
    const deletitem = (id) => {
        dispatch(deletitemaction(id))
        // console.log(id)
    }
    const total = () => {
        let price = 0;
        product.map((ele) => {
            return price = ele.price * ele.quantity + price
        })
        setPrice(price)
    }

    const send = (e) => {
        dispatch(Addtocart(e));
    }
    const remove = (item) => {
        // console.log("remove", item)
        dispatch(Remove(item))
    }
    const deleteitem = (id) => {
        dispatch(deletitemaction(id))
    }

    useEffect(() => {
        total()
    }, [total])


    const handlechange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const ProceedPurchage = () => {
        axios.post("https://ghartak.onrender.com/addblog", data)
            .then((res) => {
                alert(res.data.mess)
                // console.log(res.data.mess)
            })
            .catch((err) => {
                alert(err.data.mess)
            })
            localStorage.setItem("cartdata",JSON.stringify(product))
            localStorage.setItem("adress",JSON.stringify(data))
    }

    const Addcoupen = () =>{
        
    }
    return (
        <>
            <div className={styles.blogparentbox}>
                <h1 style={{ width: "20%", margin: "auto" }}>Billing Details</h1>

                <Box
                    className={styles.textfieldbox}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, mb: "20px" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={styles.secondbox}>
                        <div>
                            <div style={{ display: "flex" }}>
                                <TextField
                                    className={styles.textfield}
                                    onChange={(e) => handlechange(e)}
                                    name="firstname"
                                    id="outlined-multiline-flexible"
                                    label="First Name"
                                    //   multiline
                                    rows={1}
                                />
                                <TextField
                                    className={styles.textfield}
                                    onChange={(e) => handlechange(e)}
                                    name="lastname"
                                    id="outlined-multiline-flexible"
                                    label="Last Name"
                                    //   multiline
                                    rows={1}
                                />

                            </div>
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="email"
                                id="outlined-multiline-flexible"
                                label="Email"
                                multiline
                                rows={1}
                            />
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="companyname"
                                id="outlined-multiline-flexible"
                                label="Company Name"
                                multiline
                                rows={1}
                            />
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="pincode"
                                id="outlined-multiline-static"
                                label="Postcode/ZIP"
                                multiline
                                rows={1}
                            // defaultValue="Default Value"
                            />
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="city"
                                id="outlined-multiline-flexible"
                                label="Town/City"
                                multiline
                                rows={1}
                            />
                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="streetaddress"
                                id="outlined-multiline-static"
                                label="Street Address"
                                multiline
                                rows={3}
                            // defaultValue="Default Value"
                            />

                            <TextField
                                className={styles.textfield}
                                onChange={(e) => handlechange(e)}
                                name="areamark"
                                id="outlined-multiline-flexible"
                                label="Area Mark"
                                multiline
                                rows={1}
                            />
                            <div style={{ display: "flex" }}>
                                <TextField
                                    className={styles.textfield}
                                    onChange={(e) => handlechange(e)}
                                    name="mobileno"
                                    id="outlined-multiline-static"
                                    label="Mobile No."
                                    multiline
                                    rows={1}
                                />
                                <TextField
                                    className={styles.textfield}
                                    onChange={(e) => handlechange(e)}
                                    name="alternativemobileno"
                                    id="outlined-multiline-static"
                                    label="Alternative Mobile No."
                                    multiline
                                    rows={1}
                                />
                            </div>

                        </div>
                        <div>
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Product Name</th>
                                            <th>Delet</th>
                                        </tr>
                                    </thead>
                                    <Divider />

                                    <tbody>
                                        {
                                            product && product.map((item) => {
                                                return (
                                                    <>

                                                        <tr className='cartsingledata'>
                                                            <td>
                                                                <Link to={`/productDetails/${item.id}`}>
                                                                    <img src={item.thumbnail} alt="" style={{ width: "5rem", height: "5rem" }} />
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <p><b>{item.title}</b></p>
                                                                <p>Price:-{item.price}</p>
                                                                {/* <p>Category:-{item.category}</p> */}
                                                            </td>
                                                            {/* <td>
                                                                <div className={styles.buttondiv}>
                                                                    <button onClick={() => send(item)}>+</button>
                                                                    <button>{item.quantity}</button>
                                                                    <button onClick={item.quantity <= 1 ? () => deleteitem(item.id) : () => remove(item)}>-</button>
                                                                </div>
                                                            </td> */}
                                                            <td>
                                                                <DeleteIcon
                                                                    //   onClick={handleClose}
                                                                    className='cartdeleticon' onClick={() => deletitem(item.id)} />
                                                            </td>
                                                        </tr>

                                                    </>
                                                )
                                            })
                                        }
                                        <hr />
                                        <p className='text-center'>Total :₹ {price}</p>


                                        {/* <Link to="/information"><button className='checkout'>Checkout</button></Link> */}

                                    </tbody>
                                </Table>


                            </div>

                            <div style={{ display: "flex" }}>
                                <TextField
                                    className={styles.textfield}
                                    onChange={(e) => handlechange(e)}
                                    name="Have You Coupen Code"
                                    id="outlined-multiline-flexible"
                                    label="Have You Coupen Code"
                                    //   multiline
                                    rows={1}
                                />
                                <Button onClick={Addcoupen}>
                                    Add Coupen
                                </Button>

                            </div>
                            <Stack direction="row" spacing={2}>

                                <Button variant="contained" endIcon={<SendIcon />} onClick={ProceedPurchage}>
                                    Proceed To Payment
                                </Button>
                            </Stack>
                        </div>
                    </div>


                </Box>
            </div>
        </>
    );
}
export default Checkout