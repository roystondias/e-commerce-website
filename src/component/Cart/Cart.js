import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Cart.module.css'
import { useSelector } from "react-redux"

function Cart() {
    let ArrayValue = useSelector((state) => {
        return state.buttonClickReducer.data;
    })
    console.log(ArrayValue);
    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
            Products Added To the Cart
            {ArrayValue.map((element)=>{
                return <div className="card">
                    <div className="card-header">
                        {element.title}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.price}</h5>
                        <p className="card-text">{element.description}</p>
                        <div className="btn btn-primary">Go somewhere</div>
                    </div>
                </div>
            })}
                
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart