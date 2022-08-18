import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Cart.module.css'

function Cart() {
    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
            Products Added To the Cart
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart