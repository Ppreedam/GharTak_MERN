import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const initialdata = {
    userId: "",
    amount: ""
}

export function AddWalletpage() {
    const [show, setShow] = useState(false);
    const [data, setdata] = useState(initialdata)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlechangemoney = (e) => {
        setdata({...data,[e.target.name]:e.target.value})
    }

    const Addmoney = () => {
        // console.log("hellomoney", data)
        axios.post("https://sarkari-card.onrender.com/addfund",data)
        .then((res)=>alert(res.data.message))
        .catch((err)=>{
            if(err.message=='Request failed with status code 400'){
                alert("User not found Please Enter valid userId")
            }
        })
    }

    return (
        <>
            <button onClick={handleShow} style={{border:"none"}}>
                AddWallet
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>UserId</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={(e) => handlechangemoney(e)}
                                name="userId"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="50"
                                autoFocus
                                onChange={(e) => handlechangemoney(e)}
                                name="amount"
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={Addmoney}>
                            Add Money
                        </Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

