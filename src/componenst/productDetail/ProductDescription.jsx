import React, { useState } from 'react'
import './styles/Productdescription.css'


const ProductDescription = ({ productInfo }) => {

  const [count, setCount] = useState(1)

  const sumar = () => setCount(count + 1)

  const restar = () => {
    if (count - 1 >= 1) {
      return setCount(count - 1)
    }

  }

  return (
    <article>
      <section>
        <h1 className='h1'>Home <div className='punto'></div>  {productInfo?.product.title}</h1>
      </section>
      <article className='container__productodescripcion'>


        <section>
        {/* <header>
    {
      productInfo?.map(img => (
          <div key={img.id}>
            <img src={img.productImgs} alt="" />
          </div>
      ))
    }
  </header> */}
        </section>
        <section className='producto-info'>
          <h2 className='product-info__name'>{productInfo?.product.title}</h2>
          <p className='product__info__description'>{productInfo?.product.description}</p>
          <div className='product__info__body'>
            <article className='product__info__price'>
              <h3 className='product__info__label'>Price</h3>
              <span className='product-info__price__value'>&#36;{productInfo?.product.price}</span>
            </article>
            <article className='product__info__quantity'>
              <h3 className='product__info__label'>Quantity</h3>
              <div className='product__info__btn'>
                <button className='btn' onClick={restar}>-</button>
                <div className='count'>{count}</div>
                <button className='btn' onClick={sumar}>+</button>
              </div>
            </article>
          </div>
          <div className='container__btn__add'>
            <button className='btn__add'>Add to cart</button>
          </div>
        </section>

      </article>
    </article>
  )
}

export default ProductDescription
