import { useState } from "react";
import { postMessage } from "../../apis/chatMessagesAPIs";

function CreateRoom (){
    const [showPopup, setShowPopup] = useState(false);
    const [inputRoomName, setInputRoomName] = useState('');
    
    const newMessage = 'welcome to my new room!';
    const togglePopup = () => {
        setShowPopup(!showPopup)
    };

    function handleChange(e) { 
        setInputRoomName(e.target.value);

    }
    function submitHandler(e) { 
        e.preventDefault();
        postMessage({ roomName: inputRoomName, text:newMessage})
        setInputRoomName('');
        togglePopup();
    }

    return (
        <div>
            <div >
                <button  onClick={togglePopup} value={false}>Create Room</button>
                {showPopup ? (
                    <div >
                        <div >
                            <div>
                                <form onSubmit={submitHandler}>
                                    <input value={inputRoomName || ''} onChange={handleChange}>
                                    </input>
                            <button  type='submit'>
                                create
                            </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
           
        </div>
    )
}

export default CreateRoom;