import React from 'react';
import './Results.css';

function Results() {
  return (
    <div className='results'>
        <h3>Результаты</h3>

        <div class="results_container swiper">

            <div class="swiper-wrapper swiper_results_container">

                <div class="swiper-slide slide">
                    <img src="/img/results_1.png" alt=""></img>
                </div>
                <div class="swiper-slide slide">
                    <img src="/img/results_2.png" alt=""></img>
                </div>
                <div class="swiper-slide slide">
                    <img src="/img/results_2.png" alt=""></img>
                </div>
                <div class="swiper-slide slide">
                    <img src="/img/results_1.png" alt=""></img>
                </div>
            </div>

            <div class="swiper-pagination"></div>
        </div>

        <a href="/" className='btn btn_blue'>Хочу результат!</a>
    </div>
  )
}

export default Results