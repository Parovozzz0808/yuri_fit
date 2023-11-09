import React from 'react';
import Slider from 'react-slick';
import './Results.css';
import '../Slider/slick-theme.css';
import '../Slider/slick.css';

const img_1 = new URL ('../../assets/images/results_1.png', import.meta.url);
const img_2 = new URL ('../../assets/images/results_2.png', import.meta.url);


function Results() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScrol: 2,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScrol: 1
                }
            }
        ]
    };
    return (
        <div className='results'>
            <h3>Результаты</h3>
            <Slider {...settings}>
                <div>
                    <img src={img_1} alt="/"></img>
                </div>
                <div>
                    <img src={img_2} alt="/"></img>
                </div>
                <div>
                    <img src={img_2} alt="/"></img>
                </div>
                <div>
                    <img src={img_1} alt="/"></img>
                </div>  
            </Slider>
        </div>
    );
}

export default Results