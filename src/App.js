import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from './Componants/NavBar/navBar';
import { Taps } from './Resources/data/Taps';
import { Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/homePage"
import Product from "./Pages/ProductsPage/products"
import ShopingCart from "./Pages/ShopingcartPage/ShCart"
import Page from "./Pages/Page/Page"
import Footer from "./Componants/footer/footer"
function App() {
  const info = {
    retweetValue: 20,
    favValue: 20,
    cart_badeValue: 20,
    cartValue: 12
  }
  return (
    <React.Fragment>
      <NavBar taps={Taps} NavInfo={info} ></NavBar>
      <div >
        <Route path="/" exact component={HomePage} />
        <Route path="/Products" exact component={Product} />
        <Route path="/Shopping-cart" exact component={ShopingCart} />
        <Route path="/Pages" exact component={Page} />
      </div>
      <Footer />
    </React.Fragment>

  )
}
export default App;
