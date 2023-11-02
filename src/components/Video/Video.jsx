import React from 'react';
import Slider from 'react-slick';
import './slick-theme.css';
import './slick.css';

// import './Video.css';

const video_1 = new URL ('../../assets/images/video_1.png', import.meta.url);
const video_2 = new URL ('../../assets/images/video_2.png', import.meta.url);
const video_3 = new URL ('../../assets/images/video_3.png', import.meta.url);

// function Vid() {
//   return (
//     <div className='video'>
//         <h3>Видео <span>знакомство</span></h3>    
    
//         <div className="swiper swiper_video">

//             <div className="swiper-wrapper swiper_video_container">

//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_1.png" alt=""></img>

//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>

//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_2.png" alt=""></img>
                        
//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>

//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_3.png" alt=""></img>
                        
//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>

//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_1.png" alt=""></img>
                        
//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>
//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_1.png" alt=""></img>
                        
//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>

//                 <div className="swiper-slide slide">
//                     <div className="video_container">
//                         <img src="/img/video_1.png" alt=""></img>
                        
//                     </div>
//                     <h4>Улучшение влияние жизни</h4>
//                 </div>
//             </div>
        
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
        
//         </div>
//     </div>
//   )
// }

function Video() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScrol: 3
    };
    return (
        <div className='video'>
            <h3>Видео <span>знакомство</span></h3>
            <Slider {...settings}>
                <div>
                    <img src={video_1} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div>
                    <img src={video_2} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div>
                    <img src={video_3} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div>
                    <img src={video_2} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div>
                    <img src={video_3} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>
                <div>
                    <img src={video_1} alt="/"></img>
                    <h4>Улучшение влияние жизни</h4>
                </div>    
            </Slider>
        </div>
    );
}

export default Video