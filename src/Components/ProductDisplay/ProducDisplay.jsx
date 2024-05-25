import React, { useContext } from 'react'
import './ProducDisplay.css'
import star_dull_icon from "../Assets/star_dull_icon.png"
import star_icon from "../Assets/star_icon.png"
import { ShopContext } from '../Context/ShopContext'
 const ProducDisplay = (props) => {
    const{product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div>
  <div className='productdisplay'>
<div className="productdisplay-left">
    <div className="productdisplay-img-list">
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>
        <img src={product.image} alt=""/>

    </div>
    <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt=""/>
    </div>
</div>
<div className="productdisplay-right">
    <h1>  {product.name}</h1>
    <div className="productdisplay-right-star">
    <img src={star_icon} alt=""/>
    <img src={star_icon} alt=""/>
    <img src={star_icon} alt=""/>

    <img src={star_dull_icon} alt=""/>
    <img src={star_dull_icon} alt=""/>
    <p>(263)</p>
    </div>
<div className="productdisplay-right-prices">
    <div className="productdisplay-right-price-old">
        ${product.old_price}
    </div>
    <div className="productdisplay-right-price-new">
    ${product.new_price}
    </div>
</div>

<div className="productdisplay-right-description">
Heavyweight French Terry fabric is soft and durable , making it perfect for a relaxed day in the sun or a light hearty rain shower.
New Balance is a proud member of the Better Cotton Initiative. When you buy cotton products from New Balance, you’re supporting more sustainable cotton farming practices. 
</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
    <div className="productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>

        <div>XXL</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='productdisplay-right-category'><span>Category </span> Women ,T-Shirt, Crop Top</p>
<p className='productdisplay-right-category'><span>Tags </span> Modern Latest</p>
</div>


    </div>
    {/* <Footer/> */}
    </div>
  
  )
}

export default ProducDisplay;