import React from 'react'
import { NavLink } from 'react-router-dom'
// import Bars from '../../../public/Bars'
import './styles/Header.css'

// {

//   const headerBtn = document.querySelector(".header__btn")
//   const headerList = document.querySelector(".header__list")

//   headerBtn.addEventListener("click", () => {
//     headerList.classList.toggle("nav__menu__visible")

//   })

// }
const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/">
          <h1 className="header__logo">e-commerce</h1>
        </NavLink>
        <button className='header__btn'>
        
        </button>
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''}
              to="/login">
              Login
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''}
              to="/purchases">
              Purchases
            </NavLink>
          </li>
          <li className="header__item">
          <NavLink className={({ isActive }) => isActive ? 'active-link' : ''}
              to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>

  )
}

export default Header
