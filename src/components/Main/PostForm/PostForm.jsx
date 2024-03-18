import React, {useState} from "react";
import Axios from "axios";
import { useMask } from "@react-input/mask";


const PostForm = () => {
    const url = ''
    const [data, setData] = useState({name: '', iduser:'', email: ''})

    const handleChange = (e) => {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            iduser: data.iduser,
            email: data.email
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    const inputRef = useMask({mask: "+7 (___) ___-__-__", replacement: { _: /\d/ } });

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className='modal_form'>
                <input onChange={(e) => handleChange(e)} className='modal_form_input' id="name" value={data.name} type="text" placeholder='Ваше имя'/>
                <input onChange={(e) => handleChange(e)} className='modal_form_input' id="iduser" value={data.iduser} type="text" placeholder='(900) 888-77-66' ref={inputRef}/>
                <input onChange={(e) => handleChange(e)} className='modal_form_input' id="email" value={data.email} type="email" placeholder='E-mail'/>
                <button className='btn btn_blue' type='submit'>отправить</button>
            </form>
        </div>
    )
}

export default PostForm