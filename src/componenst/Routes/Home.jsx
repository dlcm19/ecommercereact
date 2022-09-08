import React, { useEffect } from 'react'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import './styles/Home.css'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  const products = useSelector(state => state.products)
  console.log(products);
  return (
    <div className='home'>
      <div className='home__container__card'>
        {
          products?.map(product => (
            <CardHome
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
