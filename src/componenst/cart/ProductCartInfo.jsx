import axios from 'axios'
import React, { useState } from 'react'
import getElement from '../utilis/getElement'
import './styles/ProductCartInfo.css'
// import productsSlice from '../../store/slices/products.slice'


const ProductCartInfo = ({product,getAllProduct }) => {

const DeleteProduct = () =>{
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
  axios.delete(URL, getElement())
  .then(() => getAllProduct())
  .catch(err => console.log(err))
}


  return (
    <article className='container__ProductCartInfo'>
       <header className='hearder__ProductCarInfo'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
       </header>
       <i onClick={DeleteProduct} className="fa-sharp fa-solid fa-trash"></i>
       <span className='cart__quantity'>{product.productsInCart.quantity}</span>
        <div className='total__product'>
            <span className='cart__total-label'>Total:</span>
            <p className='cart__total-numbre'>{product.price}</p>
        </div>
       
    </article>
  )
}

export default ProductCartInfo
