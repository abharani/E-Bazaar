import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts'
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className='product'>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <Relatedproducts product={product}/>
    </div>
  )
}

export default Product