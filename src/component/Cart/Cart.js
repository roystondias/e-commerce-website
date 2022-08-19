import React from 'react'
//importing all the components
import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './Cart.module.css'

//using useSelector from react-redux
import { useSelector } from "react-redux"

function Cart() {
    let ArrayValue = useSelector((state) => {
        return state.buttonClickReducer.data;
    })
    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
                <h3>Products Added To the Cart</h3>
                {ArrayValue.map((element) => {
                    console.log(element.image);
                    return <div className={styles.card}>
                        <img src={element.image} className={styles.image} alt="..."></img>
                        <p className="card-text">{element.title}</p>
                        <p>Ratings: {element.rating}/5</p>
                        <h5 className="card-title">Rs{element.price}/-</h5>
                        <div className="card-body">
                        </div>
                    </div>
                })}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cart