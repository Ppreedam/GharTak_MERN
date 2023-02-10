import React from 'react'
import styles from "./HomeCard.module.css"
import { Link } from "react-router-dom"

const HomeCard = () => {
    return (
        <>
            <div className={styles.fashionhr}>
                <div>HEALTH</div>
                <div></div>
            </div>

            <div className={styles.cardmainbox} >
                <div className={styles.leftbox}>

                    <div className={styles.leftboxchildleft}>
                        <img className={styles.leftboxchildleftimage} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/Coffee-390x205.jpg" alt="" />
                        <h4>Coffee is health food: Myth or fact?</h4>
                        <div className={styles.authordatebox}>
                            <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            <p><i class="fa-solid fa-user"></i>ThemeGrill Team</p>
                        </div>
                        <p >Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan malesuada convallis. Suspendisse egestas luctus nisl, sit amet</p>
                    </div>

                    <div className={styles.leftboxchildtigh}>
                        <div className={styles.leftboxchildtighimagebox} >
                            <div>
                                <img src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/mosquito-130x90.jpg" alt="" />
                            </div>
                            <div>
                                <Link className={styles.textdecoration}><p>Mosquito-borne disease has threaten world</p></Link>
                                <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            </div>
                        </div>

                        <div className={styles.leftboxchildtighimagebox} >
                            <div>
                                <img src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/eclipse-130x90.jpg" alt="" />
                            </div>
                            <div>
                                <Link className={styles.textdecoration}><p>Mosquito-borne disease has threaten world</p></Link>
                                <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            </div>
                        </div>

                        <div className={styles.leftboxchildtighimagebox} >
                            <div>
                                <img src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/fruits-130x90.jpg" alt="" />
                            </div>
                            <div>
                                <Link className={styles.textdecoration}><p>Mosquito-borne disease has threaten world</p></Link>
                                <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            </div>
                        </div>

                        <div className={styles.leftboxchildtighimagebox} >
                            <div>
                                <img src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/relay-race-655353_1280-1-130x90.jpg" alt="" />
                            </div>
                            <div>
                                <Link className={styles.textdecoration}><p>Mosquito-borne disease has threaten world</p></Link>
                                <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Sidebar */}
                <div className={styles.rightbox}>
                    <img style={{ width: "100%" }} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2021/06/add3.png" alt="" />
                </div>
            </div>

            {/* 2nd section  */}


            <div className={styles.fashionhr2ndsection}>
                <div>Fashion</div>
                <div></div>
            </div>

            <div className={styles.cardmainbox} >
                <div className={styles.leftbox}>

                    <div className={styles.leftboxchildleft}>
                        <img className={styles.secondleftboxchildleftimage} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/model-600225_1280-390x205.jpg" alt="" />
                        <h4>Coffee is health food: Myth or fact?</h4>
                        <div className={styles.authordatebox}>
                            <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            <p><i class="fa-solid fa-user"></i>ThemeGrill Team</p>
                        </div>
                        <p >Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan malesuada convallis. Suspendisse egestas luctus nisl, sit amet</p>
                    </div>

                    {/* <div > */}
                    <div className={styles.leftboxchildleft}>
                        <img className={styles.secondleftboxchildleftimage} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/beauty-666605_1920-130x90.jpg" alt="" />
                        <h4>Coffee is health food: Myth or fact?</h4>
                        <div className={styles.authordatebox}>
                            <p><i class="fa-solid fa-calendar-days"></i>March 24, 2015</p>
                            <p><i class="fa-solid fa-user"></i>ThemeGrill Team</p>
                        </div>
                        <p >Vivamus vestibulum ut magna vitae facilisis. Maecenas laoreet lobortis tristique. Aenean accumsan malesuada convallis. Suspendisse egestas luctus nisl, sit amet</p>
                    </div>

                    {/* </div> */}
                </div>

                {/* Right Sidebar */}
                <div className={styles.rightbox}>
                    <div className={styles.newshr}>
                        <div>News</div>
                        <div></div>
                    </div>
                    <img style={{ width: "100%" }} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/fireman-100722_1280-390x205.jpg" alt="" />
                </div>
                
            </div>
        </>
    )
}

export default HomeCard