import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import './styles/ProductDetail.css'


const ProductDetail = () => {
 
  const [productInfo, setProductInfo] = useState()
   
  const {id} = useParams()
  useEffect(() => {
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
   axios.get(URL)
   .then( res => setProductInfo(res.data.data))
   .catch(err => console.log(err))
  },[])
  
  console.log(productInfo);
  return (
    <div className='container__productdetail'>
     <ProductDescription productInfo={productInfo} />
    </div>
  )
}

export default ProductDetail
