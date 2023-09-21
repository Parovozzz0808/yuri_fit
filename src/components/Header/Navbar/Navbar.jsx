import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'> Программы  <span className='fa-solid fa-chevron-down'></span>
        <ul className='programm_list' id='programm_list'>
            <li>Сушка</li>
            <li>Набор массы</li>
            <li>Рекомпозиция</li>
        </ul>
      </a>
      <a href='/'>Статьи</a>
      <a href='#about'>Обо мне</a>
      <a href='/'>Отзывы</a>
      <a href='/'>Личный кабинет</a>  
    </div>
  )
}

export default Navbar