import React, { useState } from 'react'
import './Header.css';
import {AiOutlineMenu, AiOutlineClose, AiFillCaretDown} from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='header'>
      <div className='header_container'>
            <a href="/" className='logo'> MuFIT<span>LOGO</span> </a>

            <div onClick={() => setNav(!nav)} className="menu_btn">
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            <div className={nav ? ['navbar', 'active'].join(' ') : 'navbar'}>

              <div className='dropdown'> 
                <a href='/' className='dropbtn'> 
                  Программы <span><AiFillCaretDown /></span>
                </a> 
               
                <div className='dropdown_content'>
                  <a href="/">Сушка</a>
                  <a href="/">Набор массы</a>
                  <a href="/">Рекомпозиция</a>
                </div>
              </div>

              <a href='/'>Статьи</a>
              <a href='#about'>Обо мне</a>
              <a href='/'>Отзывы</a>
              <a href='/'>Личный кабинет</a>  
            </div>
      </div>      
    </div>
  )
} 

export default Header