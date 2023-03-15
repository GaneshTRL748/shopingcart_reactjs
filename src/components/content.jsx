import React from "react";
import '../styles/content.css'
import Cards from './cards'
import { useState } from "react";
let Content=({additem,list,cartbtnoperation})=>
{
    const [data,Setdata]=useState(list);
   const filterItem=(value)=>
   {
           const result=list.filter((curdata)=>
           {
              return curdata.cat===value;
           }
           );
           Setdata(result);
   }
  
    return (
        <div className="content">
            <div className="category">
                <div><button onClick={()=>Setdata(list)}>All</button></div>
               <div><button onClick={()=>filterItem('vegetables')}>Vegetables</button></div> 
               <div><button onClick={()=>filterItem('fruits')}>Fruits</button></div> 
               <div><button onClick={()=>filterItem('snacks')}>Snacks</button></div> 
            </div>
            <div className="content_cards">
                   {
                        data.map((item)=>(
                            <Cards data={item} additem={additem} key={item.id} cartbtnoperation={cartbtnoperation}/>
                        ))
                    }   
             </div>
        </div>

    )
}
export default Content