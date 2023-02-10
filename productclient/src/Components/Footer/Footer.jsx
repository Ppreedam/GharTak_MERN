import React from 'react'
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={styles.footerparentbox}>

                <div className={styles.footercolumn}>
                    <div className={styles.footer1}>
                        <div>About Us</div>
                        <div></div>
                    </div>

                    <p className='footer1paragraph'>
                        We are dealing with blog like sarkari
                        yojana and document printing and provide digital copy
                    </p>
                </div>
                {/* second footer */}
                <div className={styles.footercolumn}>
                    <div className={styles.footer2}>
                        <div>Categories</div>
                        <div></div>
                    </div>

                    <p><Link className={styles.linktextdecoration}>Entertainment</Link></p>
                    <p><Link className={styles.linktextdecoration}>General</Link></p>
                    <p><Link className={styles.linktextdecoration}>News</Link></p>
                    <p><Link className={styles.linktextdecoration}>Sports</Link></p>
                    <p><Link className={styles.linktextdecoration}>Health</Link></p>
                    <p><Link className={styles.linktextdecoration}>Fashion</Link></p>
                    <p><Link className={styles.linktextdecoration}>Style</Link></p>
                    <p><Link className={styles.linktextdecoration}>Technology</Link></p>
                    <p><Link className={styles.linktextdecoration}>Featured</Link></p>

                </div>

                {/* third footer */}
                <div className={styles.footercolumn}>
                    <div className={styles.footer3}>
                        <div>Useful Links</div>
                        <div></div>
                    </div>

                    <p><Link className={styles.linktextdecoration}>About Us</Link></p>
                    <p><Link className={styles.linktextdecoration}>Privacy Policy</Link></p>
                    <p><Link className={styles.linktextdecoration}>Terms of Use</Link></p>
                    <p><Link className={styles.linktextdecoration}>Contact Us</Link></p>

                </div>

                {/* fourt footer */}
                <div className={styles.footercolumn}>
                    <div className={styles.footer4}>
                        <div>ColorMag Pro</div>
                        <div></div>
                    </div>

                    <p>
                        Contains all features of free version and many new additional features.
                    </p>

                    <span className="icons">
                        <Link><i style={{ color: "#c46101", marginLeft: "20px" }} className="fab fa-facebook"></i></Link>
                        <Link><i style={{ color: "#c46101", marginLeft: "20px" }} className="fab fa-instagram"></i></Link>
                        <Link><i style={{ color: "#c46101", marginLeft: "20px" }} className="fab fa-github"></i></Link>
                        <Link> <i style={{ color: "#c46101", marginLeft: "20px" }} className="fab fa-twitter"></i></Link>
                    </span>
                </div>


            </div>
        </>
    )
}

export default Footer