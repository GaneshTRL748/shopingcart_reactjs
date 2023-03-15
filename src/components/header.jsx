import React from "react";
import '../styles/header.css'
let Header=({size,setClick})=>
{
    return (
        <div className="header">
            <label className="head_label">GSL Grocery Shop</label>
            <button className="cart_size">{size}</button>
            <button className="cart_btn" onClick={()=>setClick(true)}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
        </div>
    )
}
export default Header