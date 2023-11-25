import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_dull_icon from "../Assests/star_dull_icon.png";
import star_icon from "../Assests/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-new">
            <p>₹{product.new_price}</p>
          </div>
          <div className="productdisplay-right-prices-old">
            <p>₹{product.old_price}</p>
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
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
        <button onClick={() => {addToCart(product.id)}}>Add To Cart</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, Tshirt,  Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags</span> Modern, Lastest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
