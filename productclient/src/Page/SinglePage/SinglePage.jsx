import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./singlepage.module.css"
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';

const SinglePage = () => {

    const [data, setData] = useState();

    const id = useParams()


    const Getblogdata = () => {
        axios(`http://localhost:5000/getblog`)
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err))
    }



    useEffect(() => {
        Getblogdata()
    }, [])

    const filterdata = data && data.filter((el) => {
        return el._id == id.id
    })

    // console.log("data",filterdata)
    return (
        <>
            <div className={styles.parentbox}>
                <div className={styles.leftbox}>
                    {
                        filterdata && filterdata.map((item) => {
                            // console.log(item)
                            return (
                                <>
                                    <div>
                                        <img className={styles.imgurl} src={item.imgurl} alt="" />
                                        <div className={styles.contentbody}>
                                            <h1>{item.title}</h1>
                                            <h6>{item.metatag}</h6>
                                            <h4>{item.question1}</h4>
                                            <p>{item.answer1}</p>
                                            <h4>{item.question2}</h4>
                                            <p>{item.answer2}</p>
                                            <h4>{item.question3}</h4>
                                            <p>{item.answer3}</p>
                                            <h4>{item.question4}</h4>
                                            <p>{item.answer4}</p>
                                            <h4>{item.question5}</h4>
                                            <p>{item.answer5}</p>
                                            <h4>{item.question6}</h4>
                                            <p>{item.answer6}</p>
                                            <h4>{item.question7}</h4>
                                            <p>{item.answer7}</p>
                                            <h4>{item.question8}</h4>
                                            <p>{item.answer8}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className={styles.rightbox}>

                </div>
            </div>
        </>
    )
}

export default SinglePage