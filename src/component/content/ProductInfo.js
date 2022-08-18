import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './ProductInfo.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ProductInfo(props) {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [])
  
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div className="card text-center">
          <div className="card-header">
            {location.state.title}
          </div>
          <div className="card-body">
            <img src={location.state.image}/>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div className="btn btn-primary">Add To Cart</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProductInfo