import React from 'react'
import styles from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <img src='https://uploads-ssl.webflow.com/5eac299e2c463e4f968103e2/5f6e087f8174534bd1622684_intuio_d.svg' alt="..."></img>
                </Link>
                <nav>
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">Sign Up</a></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header