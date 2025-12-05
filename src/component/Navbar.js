import React from 'react'
import logoImg from '../asset/logo1.png'
import { Link, NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <header>
        <h1 className="logo">
            <Link to='/'>
            <img src={logoImg} alt="logo" /> <span>MenuRoulette</span>
            </Link>
        </h1>

        <nav className="gnb">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/meals'>Food List</NavLink>
            <NavLink to='/roulette'>Food Roulette</NavLink>
            <NavLink to='/foodVideo'>Food video</NavLink>
        </nav>
    </header>
  )
}

export default Navbar