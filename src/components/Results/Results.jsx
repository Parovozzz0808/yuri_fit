import React from 'react';
import Slider from 'react-slick';

import './Results.css';

const img_1 = new URL ('../../assets/images/results_1.png', import.meta.url);
const img_2 = new URL ('../../assets/images/results_2.png', import.meta.url);

// function Results() {
//   return (
//     <div className='results'>
//         <h3>Результаты</h3>

//         <div class="results_container swiper">

//             <div class="swiper-wrapper swiper_results_container">

//                 <div class="swiper-slide slide">
//                     <img src="/img/results_1.png" alt=""></img>
//                 </div>
//                 <div class="swiper-slide slide">
//                     <img src="/img/results_2.png" alt=""></img>
//                 </div>
//                 <div class="swiper-slide slide">
//                     <img src="/img/results_2.png" alt=""></img>
//                 </div>
//                 <div class="swiper-slide slide">
//                     <img src="/img/results_1.png" alt=""></img>
//                 </div>
//             </div>

//             <div class="swiper-pagination"></div>
//         </div>

//         <a href="/" className='btn btn_blue'>Хочу результат!</a>
//     </div>
//   )
// }

function Results() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScrol: 2
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