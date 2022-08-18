import './App.css';

//importing the components
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

//using the react router dom (install it first and all to readme.md)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './component/content/Products';
import ProductInfo from './component/content/ProductInfo';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header></Header>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Footer></Footer>}></Route>
        </Routes>
        <Routes>
          <Route path="/product" element={<ProductInfo></ProductInfo>}></Route>
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


