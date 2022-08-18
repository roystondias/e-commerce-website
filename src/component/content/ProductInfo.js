import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './ProductInfo.module.css'

function ProductInfo(props) {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
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