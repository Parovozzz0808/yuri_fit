import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div class="footer_container">

            <div class="footer_top">

                <div class="share">
                    {/* <a href="/" class='fab fa-telegram'></a>
                    <a href="/" class='fab fa-instagram'></a>
                    <a href="/" class='fab fa-facebook-f'></a> */}
                </div>

            </div>

            <div class="footer_bottom">

                <nav class="navbar">
                    <a href="/">Программы</a>
                    <a href="#about">Обо мне</a>
                    <a href="/" class="logo"> MuFIT<span>LOGO</span> </a>
                    <a href="/">Личный кабинет</a>
                    <a href="+79777777777">+7-977-777-77-77</a>  
                </nav>

            </div>

        </div>
    </div>
  )
}

export default Footer