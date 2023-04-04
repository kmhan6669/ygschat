import axios from 'axios';

const API_URL = 'https://yungooso-nextjs.vercel.app/api/messages';

//getmessages
async function getMessages() { 
    return await axios.get(API_URL)
        .then((res) => {
            return res.data;
        });
}

async function postMessage({ roomName, text }) { 

    return await axios.post(API_URL,
        {
            roomname: roomName,
            username: 'han',
            text,
        }
    );
}


export { getMessages, postMessage };