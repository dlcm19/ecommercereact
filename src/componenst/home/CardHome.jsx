import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getElement from '../utilis/getElement'
import './styles/CardHome.css'
// import getConfig from '../../utils/getConfig'


const CardHome = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }
// aquí se agrega al carrito
    const AddCart = event =>{
        event.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const idElement = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, idElement, getElement())
        .then( res => console.log(res.data))
        .catch(err => console.log(err))
    }
    
    return (
        <article className='card-home' onClick={handleClick}>
            <header className='card-home-header'>
                <img  className='img__CardHome' src={product.productImgs[0]} alt="" />
            </header>
            <div className='card-home__body'>
                <h3 className='card-home__name'>{product.title}</h3>
                <section className='card-home__price'>
                 <h4 className='card-home__price-label'>Price</h4>
                 <span className='card-home__price-vale'>&#36;{product.price}</span>
                </section>
                <button onClick={AddCart} className='card-home__btn'><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
            </div>
        </article>
    )
}

export default CardHome
