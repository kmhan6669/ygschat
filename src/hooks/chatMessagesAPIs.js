import axios from 'axios';

const API_URL = 'https://yungooso-nextjs.vercel.app/api/messages';

//getmessages
function getMessages() { 
    return axios.get(API_URL)
        .then((res) => {
            return res.data;
        });
}

function postMessage({ roomName, text, username}) { 

    return axios.post(API_URL,
        {
            roomname: roomName,
            username: username || 'han',
            text,
        }
    );
}


export { getMessages, postMessage };