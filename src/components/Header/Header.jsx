import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <div className='header_top'>
            <h3>Работа из любой точки мира</h3>        
            <a href="+79777777777">+7-977-777-77-77</a>
        </div>
        <div className='header_bottom'>
            <a href="/" className='logo'> MuFIT<span>LOGO</span> </a>
            <div id="menu_btn" className='fas, fa-bars'></div>
        <Navbar />
        </div>
      </div>      
    </div>
  )
}

export default Header