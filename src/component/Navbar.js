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
            <NavLink to='/meals'>1111</NavLink>
            <NavLink to='/tips'>2222</NavLink>
            <NavLink to='/about'>3333</NavLink>
        </nav>
    </header>
  )
}

export default Navbar