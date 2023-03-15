import React from "react";
import '../styles/cards.css'
let Cards=({data,additem,cartbtnoperation})=>
{
    return (
        <div className="card">
              <div className="images">
              <img src={data.src} alt="data_image"/>
              </div>
              <div className="details">
                  <h3 className="name">{data.name}</h3>
                  <label className="price">Price:{data.price}</label>
                  <button id={data.id} className="card_btn" onClick={()=>
                  {
                    additem(data);
                    cartbtnoperation(data.id);
                  }
                } disabled={data.btn} >Add To cart</button>
              </div>
        </div>
    )
}
export default Cards