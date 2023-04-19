import { useState } from "react";

import { postMessage } from "../../apis/chatMessagesAPIs";

import './InputChat.css'

function InputChat({room}){
    const [inputChat, setInputChat] = useState('')
    function handleChange(e) { 
        setInputChat(e.target.value)
    }
    
    function submitHandler(e) { 
        e.preventDefault();
        postMessage({ roomName: room, text: inputChat })
        setInputChat('');
    }
    return (
        <div className='btn'>
            <form onSubmit={submitHandler}>
                <input value={inputChat || ''} onChange={handleChange}/>
                <button  type='submit'>submit</button>
            </form>
        </div>
    )
}

export default InputChat;


