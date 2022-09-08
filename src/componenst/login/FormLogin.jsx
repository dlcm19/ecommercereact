import React from 'react'
import './styles/FormLogin.css'
import { useForm} from "react-hook-form";
import axios from 'axios';

const FormLogin = () => {

const {register, handleSubmit, reset} = useForm()

const submit = data =>{
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
  axios.post(URL, data)
  .then( res => { 
    localStorage.setItem('token',res.data.data.token)
  })
  .catch(err => console.log(err))
  // reset({
  //   email: '',
  //   password:''
  // })

}


    return (
      <form className='login__form' onSubmit={handleSubmit(submit)}>
      <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>
       <hr />
      <div className='login__div-email'>
        <label className='login__label' htmlFor="email">Email</label>
        <input {...register('email')} className='login__input' type="email" id="email"  placeholder='Email'/>
      </div>
      <div className='login__div-password'>
        <label className='login__label' htmlFor="password">Password</label>
        <input {...register('password')} className='login__input' type="password" id="password"  placeholder='Password'/>
      </div>
      <div>
        <button className='btn__FormLogin'>Login</button>
      </div>
    </form>

    )
}

export default FormLogin
