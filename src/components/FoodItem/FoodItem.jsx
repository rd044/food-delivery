import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {

   const {cartitem,addTocart,removefromcart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {
                !cartitem[id]
                   ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white}/>
                   :<div className='food-item-counter'>
                        <img onClick={()=>removefromcart(id)}src={assets.remove_icon_red}/>
                        <p>{cartitem[id]}</p>
                        <img onClick={()=>addTocart(id)} src={assets.add_icon_green}/>
                   </div>
            }
        </div>
      <div className="food-item-info">
        <div className="food-itm-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
