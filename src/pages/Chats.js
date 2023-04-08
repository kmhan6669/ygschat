import { useEffect, useState } from "react";
import InputChat from "../components/chat/InputChat";
import ShowChats from "../components/chat/ShowChats";



function Chats({response, room}) {
    const [chats, setChats] = useState(chatList(room));
    function chatList(roomName) {
        const chatList = response?.filter((res) => res.roomname === roomName)
        const sortChatList = chatList?.sort((a, b) => new Date(a.date) - new Date(b.date))
        return sortChatList
    }

    useEffect(() => { 
        setChats(chatList(room))
    },[response])

    return (
    <div>
        <ShowChats chats={chats}/>
        <InputChat room={room}/>
    </div>
    )
}

export default Chats;
