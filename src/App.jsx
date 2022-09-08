import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './componenst/Routes/Home'
import ProductDetail from './componenst/Routes/ProductDetail'
import Login from './componenst/Routes/Login'
import Purchases from './componenst/Routes/Purchases'
import Headers from './componenst/shared/Header'
import Cart from './componenst/shared/Cart'
import ProtecteRoutes from './componenst/Routes/ProtecteRoutes'

function App() {

  // useEffect(() =>{
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //    const obj = {
  //     firstName: "Douglas",
  //     lastName: "Castillo",
  //     email: "dlcm1308@gmail.com",
  //     password: "pass130890",
  //     phone: "1234567890",
  //     role: "estudiante"
  //    }
  //   axios.post(URL, obj)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // },[])
   

    
  return (
    <div className='app'>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        
        <Route element={<ProtecteRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}
//https://ecommerce-api-react.herokuapp.com/api/v1/products

export default App
