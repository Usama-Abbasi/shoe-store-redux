import React from 'react';
import Products from '../json/shoe.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {add} from '../Redux/Slice';
import {useDispatch} from 'react-redux';
import '..//css/Detail.css';
export default function ProductDetail() {
    const dispatch = useDispatch();
    // const {addCart} = useContext(CartContext);
    const { productid } = useParams();
    const product = Products[productid];
    // console.log(product);
    const { _id, title, src, description, price,content } = product
    console.log(title)
    return (
        <>

            <div className="details" key={_id}>
                <img src={src} alt="" />
                <div className="box">
                    <div className="row">
                        <h2>{title}</h2>
                        <span>${price}</span>
                    </div>
                    <p>{description}</p>
                    <p>{content}</p>
                    <Link to="/cart" className="cart" onClick={()=>dispatch(add(title))}>
                        Add to cart
                                </Link>
                </div>
            </div>


        </>
    )
}
