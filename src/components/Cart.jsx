import React from 'react'
import product from '../json/shoe.json';
import { Link } from 'react-router-dom';
import {remove,selectCart} from '../Redux/Slice';
import {useDispatch,useSelector} from 'react-redux';
import '..//css/cart.css';
export default function Cart() {
    const dispatch = useDispatch();
    const productId = useSelector(selectCart)
    let total = 0;
    const price = productId.map(key => product[key].price);
    price.map(item => total += item);
    if (productId.length === 0) {
        return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>
    }
    else {
        return (
            <>
                {
                    productId.map((key, index) => (
                        <div className="details cart" key={product[key]._id}>
                            <img src={product[key].src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{product[key].title}</h2>
                                    <span>${product[key].price}</span>
                                    {/* {settotal(total+product[key].price)} */}

                                </div>
                                <p>{product[key].description}</p>
                                <p>{product[key].content}</p>
                            </div>
                            <div className="delete" onClick={() => dispatch(remove(product[key].title))}>X</div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h3>Total Price:${total}</h3>
                </div>
            </>
        )
    }
}
