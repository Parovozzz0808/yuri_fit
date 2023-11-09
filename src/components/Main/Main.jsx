import React from 'react'
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='main_container'>
          <div className='box_content container'>
            <h1>Привет, меня зовут Юрий, <span>я фитнес-тренер.</span> В настоящее время у большинства офисных работников есть проблема с лишним весом.</h1>  
            <a href='/' className='btn btn_blue'>записаться</a>
            <a href='/' className='btn btn_dark'>подробнее</a>
          </div>
          <div className='box_content_mobile'>
            <div className='box_content_top'>
              <h1>Привет, меня зовут Юрий, <span>я фитнес-тренер.</span> В настоящее время у большинства офисных работников есть проблема с лишним весом.</h1>  
              <a href='/' className='btn btn_blue'>записаться</a>
              <a href='/' className='btn btn_dark'>подробнее</a>
            </div>
            <div className='box_content_bottom'></div> 
          </div>
  
      </div>      
    </div>
  )
}

export default Main