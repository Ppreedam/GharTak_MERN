import React, { useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import "./pagination.css";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { ButtonGroup } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../../Redux/Appreducer/action';
import { useNavigate } from 'react-router-dom';


const PaginationData = () => {
  const [data, setData] = useState([])

  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const notify = () => toast("Wow Item Added🎈🛒🛒✔!");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function SendDatatocart(value) {
    // dispatch(Addtocart(value))
    dispatch(Addtocart(value))
  }

  const getdata = async () => {
    const response = await axios(`https://dummyjson.com/products?limit=${100}&skip=${0}`);
    setData(response.data.products)
    // console.log(response.data.products)
  }


  // handle next
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1)
  }

  // handle previous
  const handlePrevios = () => {
    if (page === 1) return page;
    setPage(page - 1)
  }

  useEffect(() => {
    getdata()
  }, [page])

  useEffect(() => {
    const pagedatacount = Math.ceil(data.length / 4);
    setPageCount(pagedatacount);

    if (page) {
      const LIMIT = 4;
      const skip = LIMIT * page // 5 *2 = 10
      const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip)
    }
  }, [data])

const redirecttoproductpage = () =>{
  navigate("/product")
}
  return (
    <>
      <div className='product-container'>

        {
          pageData.length > 0 ?
            pageData && pageData.map((el) => {
              return (

                <Card className='productcard'  >
                  <Card.Img variant="top" className='card-image' src={el.thumbnail} />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text> <strong>Brand</strong>:- {el.brand}</Card.Text>
                    <Card.Text> <strong>Category</strong>:- {el.category}</Card.Text>
                    <Card.Text> <strong>Price</strong>:- {el.price}</Card.Text>

                    <Card.Text>  <Rating name="half-rating" defaultValue={el.rating} precision={0.5} /></Card.Text>
                    <ButtonGroup >

                      <button className='button' onClick={notify}>
                        <button className='button' onClick={() => SendDatatocart(el)}>Add Cart</button>
                      </button>
                      <ToastContainer />
                    </ButtonGroup>
                  </Card.Body>
                </Card>

              )
            })
            : <div className='d-flex justify-content-center mt-4'>
              Loading... <Spinner animation="border" variant='danger' />
            </div>
        }

      </div>
      <div className='paginationbox'>
        {/* <div className='d-flex justify-content-end'>
          <Pagination>

            <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
            {
              Array(pageCount).fill(null).map((ele, index) => {
                return (
                  <>
                    <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                  </>
                )
              })
            }
            <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
          </Pagination>

          

        </div> */}

        <div className='prenextbutton'>
          <button onClick={handlePrevios} disabled={page === 1}>Pre</button>
          <button onClick={redirecttoproductpage}>Veiw More</button>
          <button onClick={handleNext} disabled={page === pageCount}>Next</button>
        </div>
      </div>
    </>
  )
}
export default PaginationData