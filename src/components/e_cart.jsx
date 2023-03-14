import React from "react";
import '../styles/e_cart.css';
import { useState } from "react";
import { useEffect } from "react";
let Cart=({cart,setClick,handlequantity,removeitem})=>
{
  const[totalprice,setPrice]=useState(0);
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
     })
      return(
        <div className="cart_content">
              {
                cart.map((value)=>
                    <div className="carts">
                        <img src={value.src} alt=""/>
                        <h3>{value.name}</h3>
                        <div className="carts_btn">
                        <button className="plus_btn" onClick={()=>handlequantity(value,+1)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                        <button className="quantity">{value.amount}</button>
                        <button className="minus_btn" onClick={()=>handlequantity(value,-1)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                        <button className="remove_btn" onClick={()=>removeitem(value.id)}>Remove</button>
                        </div>
                        <label className="cart_price">{value.price}</label>
                    </div>
                )
              }
              <div className="total_price">
                    <h1>Totalprice:{totalprice}</h1>
              </div>
             <div className="continueshop_btn">
                    <button onClick={()=>setClick(false)} >
                      Continue to shop
                    </button>
             </div>
        </div>
      
      );
}
export default Cart
