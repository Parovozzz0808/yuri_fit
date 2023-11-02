import React from 'react';
import './Activity.css';

const icon_1 = new URL ('../../assets/icons/activity_icon_1.png',import.meta.url);
const icon_2 = new URL ('../../assets/icons/activity_icon_2.png',import.meta.url);
const icon_3 = new URL ('../../assets/icons/activity_icon_3.png',import.meta.url);
const icon_4 = new URL ('../../assets/icons/activity_icon_4.png',import.meta.url);
const icon_5 = new URL ('../../assets/icons/activity_icon_5.png',import.meta.url);
const icon_6 = new URL ('../../assets/icons/activity_icon_6.png',import.meta.url);
const icon_7 = new URL ('../../assets/icons/activity_icon_7.png',import.meta.url);
const icon_8 = new URL ('../../assets/icons/activity_icon_8.png',import.meta.url);

const Activity = () => {
  return (
    <div className='activity'>
        <div className='activity_container'>
            <h3>Виды ежедневной <span>активности</span></h3>
            <div className='activity_box_img'>
                <div className="image">
                    <img src={icon_1} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_2} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_3} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_4} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_5} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_6} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_7} alt="/"></img>
                </div>
                <div className="image">
                    <img src={icon_8} alt="/"></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Activity