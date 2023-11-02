import React from 'react';
import './Footer.css';
import {AiOutlineInstagram, AiOutlineFacebook, } from 'react-icons/ai';
import {LiaTelegramPlane} from 'react-icons/lia';
import {SlSocialVkontakte} from 'react-icons/sl';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_container">

            <div className="footer_top">

                <div className="share">
                    <a href="/" class='telegram'> <LiaTelegramPlane /> </a>
                    <a href="/" class='instagram'> <AiOutlineInstagram /> </a>
                    <a href="/" class='facebook'> <AiOutlineFacebook /> </a>
                    <a href="/" class='vk'> <SlSocialVkontakte /> </a>
                </div>

            </div>

            <div className="footer_bottom">

                <nav className="navbar">
                    <a href="/">Программы</a>
                    <a href="#about">Обо мне</a>
                    <a href="/" className="logo"> MuFIT<span>LOGO</span> </a>
                    <a href="/">Личный кабинет</a>
                    <a href="+79777777777">+7-977-777-77-77</a>  
                </nav>

            </div>

        </div>
    </div>
    ) 
}

export default Footer