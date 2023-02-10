import React from 'react'
import styles from "./Carousel.module.css"
import Carousel from 'react-bootstrap/Carousel';

const CarouselEffect = () => {
    return (
        <div >
            <div className={styles.homepagemainbox}>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={styles.carouselimg}
                                src="https://themegrilldemos.com/spacious-store/wp-content/uploads/sites/109/2019/05/banner02.jpg"
                                alt="Fashion"
                            />
                            <Carousel.Caption>
                                <h3>Fashion</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className={styles.carouselimg}
                                src="https://www.netlabindia.com/wp-content/uploads/2020/12/Gaming-Laptop-Blog-Banner.jpg"
                                alt="Fashion"
                            />
                            <Carousel.Caption>
                                <h3>Fashion</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className={styles.carouselimg}
                                src="https://media.glamour.com/photos/5695d2c016d0dc3747ee2e7d/master/w_1600%2Cc_limit/fashion-2013-03-0304-fashion-week-jason-wu.gif"
                                alt="Fashion"
                            />
                            <Carousel.Caption>
                                <h3>Fashion</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                                className={styles.carouselimg}
                                src="https://1.bp.blogspot.com/-pbDffAW9Ays/YbHJLuVnRPI/AAAAAAAAaFw/NGhGhgeL98UV3Cq5h5aSfhScE4GA8EuDgCNcBGAsYHQ/s900/mobail-banner-design_900.jpg"
                                alt="Watch"
                            />

                            <Carousel.Caption>
                                <h3>Watch Fashion</h3>
                                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* four image carousel */}
                <div className={styles.fourimgcarousel}>
                    <div>
                        <img className={styles.fourimgcarouselsize} src="https://img.freepik.com/premium-vector/laptop-gadget-sale-social-media-instagram-post-banner-template_188201-98.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <img className={styles.fourimgcarouselsize} src="https://static.vecteezy.com/system/resources/previews/001/969/374/original/online-shopping-on-mobile-application-banner-3d-online-store-on-mobile-phone-banner-template-vector.jpg" alt="" />
                    </div>
                    <div>
                        <img className={styles.fourimgcarouselsize} src="https://www.hungertv.com/app/uploads/2017/07/anarita2.gif" alt="" />
                    </div>
                    <div>
                        <img className={styles.fourimgcarouselsize} src="https://themegrilldemos.com/colormag/wp-content/uploads/sites/60/2015/03/tennis-blue-392x272.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselEffect