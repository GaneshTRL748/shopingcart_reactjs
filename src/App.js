import './App.css';
import Header from './components/header';
import React,{useState} from 'react';
import Content from './components/content';
import Cart from './components/e_cart'
import list from "../src/data/data";
function App() {
   const[list1]=useState(list);
   const [cart,setCart]=useState([]);
   const[click,SetClick]=useState(false);
   const handlequantity = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const temp= cart;
		temp[ind].amount =temp[ind].amount+ d;
		
		if (temp[ind].amount === 0)
			temp[ind].amount = 1;
		setCart([...temp])
	}
   const removeitem = (id) =>{
      const result = cart.filter((item)=>item.id !== id);
      setCart(result);
      cartbtnoperation(id);
  }
  const cartbtnoperation=(id)=>
  {
   list.forEach((value)=>
   {
      if(value.id===id)
      {
          
          if(value.btn)
          {
            value.btn=false;
          }
          else{
            value.btn=true;
          }
          
      }
   }
  )
  }
   const additem=(item)=>
   {
      setCart([...cart,item]);
   }
  return (
     <React.Fragment>
        <Header size={cart.length} setClick={SetClick}/>
        {
          click?<Cart cart={cart} setClick={SetClick} handlequantity={handlequantity} removeitem={removeitem}/>: <Content additem={additem} list={list1} cartbtnoperation={cartbtnoperation} key={list1.id}/>
        }
     </React.Fragment>
  );
}

export default App;
