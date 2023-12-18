import React, {useState} from 'react'
import './Main.css';
import Modal from './Modal/Modal';
import PostForm from './PostForm/PostForm';

const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className='main'>
      <div className='main_container'>
          <div className='box_content container'>
            <h1>Привет, меня зовут Юрий, <span>я фитнес-тренер.</span> В настоящее время у большинства офисных работников есть проблема с лишним весом.</h1>  
            <button className='btn btn_blue' onClick={() => setModalActive(true)}>записаться</button>
            <a href='/' className='btn btn_dark'>подробнее</a>
          </div>
          <div className='box_content_mobile'>
            <div className='box_content_top'>
              <h1>Привет, меня зовут Юрий, <span>я фитнес-тренер.</span> В настоящее время у большинства офисных работников есть проблема с лишним весом.</h1>  
              <button className='btn btn_blue' onClick={() => setModalActive(true)}>записаться</button>
              <a href='/' className='btn btn_dark'>подробнее</a>
            </div>
            <div className='box_content_bottom'></div> 
          </div>
          <Modal active={modalActive} setActive={setModalActive}>
            <PostForm />
          </Modal>
      </div>      
    </div>
  )
}

export default Main