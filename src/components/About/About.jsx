import React from 'react'
import './About.css'; 

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about_container'>
            <div className='img_container'></div>
            <div className='about_text'>
                <p>Привет, меня зовут Юрий, <span>я фитнес-тренер.</span> В настоящее время у большинства офисных работников есть проблема с лишним весом.</p>
            </div>
        </div>
    </div>
  )
}

export default About