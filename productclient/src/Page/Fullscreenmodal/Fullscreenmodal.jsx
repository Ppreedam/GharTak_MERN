import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import styles from "./FinalDldownload.module.css"
const initialdata = {
    date: ""
}

function Fullscreenmodal() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    //   dl
    const [validity, setValidity] = useState("")

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    useEffect(() => {
        const validitydate = JSON.parse(localStorage.getItem("validitydate"));
        validitydate && validitydate.map((item) => {
            setValidity(item.date)
        })


    }, [])
    const user = JSON.parse(localStorage.getItem("finaldownload"));
    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Download DL
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Your Final Dl</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.parentbox}>
                        <div className={styles.mainbox}>
                            {
                                user && user.map((el) => {

                                    return <div>
                                        <div className={styles.container}>
                                            <img src="asset/front.jpeg" alt="Snow" className={styles.imgsize} />

                                            <div className={styles.topleft}>Issued by Government of {el.newstate}</div>
                                            <div className={styles.dlnum}><strong>{el.dlno}</strong></div>
                                            <div className={styles.issuedate}>{el.issue_date}</div>
                                            <div className={styles.validitint}>{validity}</div>
                                            <div className={styles.validititr}>{validity}</div>
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
                                            <img src="asset/back.jpeg" alt="Snow" className={styles.imgsize} />
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

                                    </div>
                                })
                            }

                        </div>

                        <div className={styles.secondbodybox}>

                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Fullscreenmodal;
