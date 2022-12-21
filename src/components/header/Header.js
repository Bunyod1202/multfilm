import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Rick_and_Morty_logo.png'
import "./header.scss"
export const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={Logo} width="150" alt="logo" />
      </Link>
      <ul className='lists'>
        <li className='list-item'>
          <NavLink className ={({isActive})=> isActive ? 'item-list item-list-active':'item-list' } to="/" >
            Home
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink  className ={({isActive})=> isActive ? 'item-list item-list-active':'item-list' }  to="/apisode" >
            About
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink  className ={({isActive})=> isActive ? 'item-list item-list-active':'item-list' }  to="/contact" >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
