import './App.css';

//importing the components
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

//using the react router dom (install it first and all to readme.md)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './component/content/Products';

function App() {
  return (
    <>
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}

export default App;


