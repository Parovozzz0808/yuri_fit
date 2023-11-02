import React from 'react';
import './Benefits.css';

const benefitsImg = new URL('../../assets/images/benefits_img.png',import.meta.url);

const Benefits = () => {
  return (
    <div className='benefits'>
      <div className="benefits_container">

        <h3><span>Преимущества</span> работы над собой</h3>

        <img src={benefitsImg} alt='/' />

      </div>      
    </div>
  )
}

export default Benefits