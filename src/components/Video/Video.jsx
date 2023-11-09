import React from 'react';
import Slider from 'react-slick';
import './Video.css';
import '../Slider/slick-theme.css';
import '../Slider/slick.css';

const video_1 = new URL ('../../assets/images/video_1.png', import.meta.url);
const video_2 = new URL ('../../assets/images/video_2.png', import.meta.url);
const video_3 = new URL ('../../assets/images/video_3.png', import.meta.url);

function Video() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScrol: 3,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScrol: 2
                }
            }
        ]
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