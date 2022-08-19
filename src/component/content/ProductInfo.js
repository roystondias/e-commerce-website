import Footer from '../footer/Footer'
import Header from '../header/Header'
import styles from './ProductInfo.module.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"
import {onAddToCart} from '../../Action/index'

function ProductInfo(props) {
  const connection = useLocation();
  let dispatch = useDispatch();

  const onAddCartClick =(event)=>{
    // console.log("Clicked");
    event.preventDefault();
    dispatch(onAddToCart(connection.state));
  }


  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div className="card text-center">
          <div className="card-header">
            {connection.state.title}
          </div>
          <div className="card-body">
            <img src={connection.state.image} alt="..."/>
            <p className="card-text">{connection.state.price}</p>
            <p className="card-text">{connection.state.description}</p>
            <p className="card-text">{connection.state.rating}</p>
            <div onClick={onAddCartClick} className="btn btn-primary">Add To Cart</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProductInfo