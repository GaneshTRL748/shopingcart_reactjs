import React from "react";
import '../styles/cards.css'
let Cards=({item,additem})=>
{
    return (
        <div className="card">
              <div className="images">
              <img src={item.src} alt=""/>
              </div>
              <div className="details">
                  <h3 className="name">{item.name}</h3>
                  <label className="price">Price:{item.price}</label>
                  <button className="card_btn" onClick={()=>additem(item)}>Add To cart</button>
              </div>
        </div>
    )
}
export default Cards