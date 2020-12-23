import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Cart from './components/Cart';
import Product from './components/Product';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Payment from './components/Payment';
export default function RouteConfig() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path='/product/:productid' element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path='/payment' element={<Payment/>}/>
            </Routes>
        </Router>
    )
}
