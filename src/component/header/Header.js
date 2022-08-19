import React from 'react'
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from "react-redux"

function Header() {
    let cartValue = useSelector((state) => {
        return state.buttonClickReducer.cartValue;
    })

    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <img src='https://uploads-ssl.webflow.com/5eac299e2c463e4f968103e2/5f6e087f8174534bd1622684_intuio_d.svg' alt="..."></img>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">Sign Up</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <Link to="/cart" style={{ textDecoration: 'none', color:'white' }}>
                            <ShoppingBasketIcon></ShoppingBasketIcon><span>{cartValue}</span>
                        </Link>
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header