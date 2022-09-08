import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecteRoutes = () => {
 
    const isLogged = localStorage.getItem('token')
     if(isLogged){
      return <Outlet />
     }else{
        return <Navigate to='/login' />
     }
    return (
    <div>
      ruta protegidas
    </div>
  )
}

export default ProtecteRoutes
