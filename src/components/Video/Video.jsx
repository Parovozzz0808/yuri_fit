import React from 'react';
import './Video.css';

function Video() {
  return (
    <div className='video'>
        <h3>Видео <span>знакомство</span></h3>    
    
        <div class="swiper swiper_video">

            <div class="swiper-wrapper swiper_video_container">

                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_1.png" alt=""></img>

                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>

                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_2.png" alt=""></img>
                        
                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>

                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_3.png" alt=""></img>
                        
                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>

                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_1.png" alt=""></img>
                        
                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_1.png" alt=""></img>
                        
                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>

                <div class="swiper-slide slide">
                    <div class="video_container">
                        <img src="/img/video_1.png" alt=""></img>
                        
                    </div>
                    <h4>Улучшение влияние жизни</h4>
                </div>
            </div>
        
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        </div>
    </div>
  )
}

export default Video