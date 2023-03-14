import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import React from 'react';
import Content from './components/content';
import Cart from './components/e_cart'
import { useState } from 'react';
function App() {
   const [cart,setCart]=useState([]);
   const[click,SetClick]=useState(false);
   const handlequantity = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount =tempArr[ind].amount+ d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
   const removeitem = (id) =>{
      const result = cart.filter((item)=>item.id !== id);
      setCart(result);
  }
   const additem=(item)=>
   {
       let check=false;
       cart.forEach((value)=>
       {
           if(value.id===item.id)
           {
            check=true;
           }
       });
       if(check==true)
       {
          alert('Item already added to cart');
       }
       else{
           setCart([...cart,item]);
       }
   }
  return (
     <React.Fragment>
        <Header size={cart.length} setClick={SetClick}/>
        {
          click?<Cart cart={cart} setClick={SetClick} handlequantity={handlequantity} removeitem={removeitem}/>: <Content additem={additem}/>
        }
     </React.Fragment>
  );
}

export default App;
