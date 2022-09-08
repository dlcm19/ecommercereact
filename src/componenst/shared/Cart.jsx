import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'
import getElement from '../utilis/getElement'
import './styles/Cart.css'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()

     const getAllProduct = () =>{
       const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart' 
         axios.get(URL, getElement())
         .then(res => setCartProducts(res.data.data.cart.products))
         .catch(err => setCartProducts())
     }

   useEffect(() => {
    getAllProduct()
   },[])

 const PurchaseOnline = () =>{
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
  const obj = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }  
  axios.post(URL, obj, getElement() )
    .then(res => {
      const products = res.data.data.cart.products
      setCartProducts(products)
      // Cálculo del total de toda la cart
      const total = products.reduce((acc, cv) => {
        return Number(cv.price) * cv.productsInCart.quantity + acc
      }, 0)
      setTotalPrice(total)
    })
    .catch(err => console.log(err))
 }
  return (
    <section className='cart__cart'>
        <h2 className='cart__title'>Your purchases</h2>
        <div className='container__product'>
         {
         cartProducts?.map( product => (
          <ProductCartInfo  
             key={product.id}
             product={product}
             getAllProduct={getAllProduct} 
          />
          ))
         }
         </div>
        <footer className='cart__footer'>
            <div className='total__Carta'>
            <span className='cart__total-goblan-value'>Total:</span>
             <p className='cart__total-global-value'>1350</p>
             </div>
             <div className='container__btn'>
            <button  onClick={PurchaseOnline} className='cart__btn'>Chechout</button>
            </div>
           </footer>
        </section>
  )
}

export default Cart
