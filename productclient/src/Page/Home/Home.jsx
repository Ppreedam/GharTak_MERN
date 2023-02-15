import React from 'react'
import styles from "./Home.module.css"
import CarouselEffect from '../../Components/Carousel/Carousel'
import HomeCard from '../../Components/HomeCard/HomeCard'
import Footer from '../../Components/Footer/Footer'
import { Pagination } from '@mui/material'
import PaginationData from '../../Components/Pagination/Pagination'
// import RecipeReviewCard from '../../Components/BlogCard/BlogCard'


const Home = () => {
  return (
    <>
    <div className={styles.homecenterpage}>
        <CarouselEffect/>
        {/* <HomeCard/> */}
        {/* <RecipeReviewCard/> */}
        {/* <Footer/> */}
        
    </div>
    <PaginationData/>
    </>
  )
}

export default Home