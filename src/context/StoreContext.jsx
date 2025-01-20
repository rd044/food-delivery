import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

   const[cartitem,setcartitem]=useState({});

   const addTocart = (itemId) =>{
      if(!cartitem[itemId]){
        setcartitem((prev)=>({...prev,[itemId]:1}))
      }
      else{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
   }
   const removefromcart = (itemId) =>{
    setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

   }


    const gettotalcartamount = () =>{
      let totalamount = 0;
      for(const item in cartitem){

        if(cartitem[item]>0){
          let iteminfo = food_list.find((product)=>product._id===item);
          totalamount += iteminfo.price*cartitem[item];
        }
       
      }
      return totalamount;
    }

    const contextvalue={
      food_list,
      cartitem,
      setcartitem,
      addTocart,
      removefromcart,
      gettotalcartamount
    }
     
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider