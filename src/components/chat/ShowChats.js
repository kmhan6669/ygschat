import './ShowChats.css'

function ShowChats({chats}){
    return (
        <div className='chats'>
            {chats?.map((chat) => { 
                var today = new Date(chat.date);
                var year = today.getFullYear();
                var month = ('0' + (today.getMonth() + 1)).slice(-2);
                var day = ('0' + today.getDate()).slice(-2);
                var dateString = year + '-' + month  + '-' + day;
                var hours = ('0' + today.getHours()).slice(-2); 
                var minutes = ('0' + today.getMinutes()).slice(-2);
                var seconds = ('0' + today.getSeconds()).slice(-2); 
                var timeString = hours + ':' + minutes  + ':' + seconds;
                return (
                    <div key={chat.id} className={chat.username === 'han'? 'mychat' : 'chat'}>
                        <div >
                            {chat.username} : {chat.text}    
                        </div>
                        <div className='time'>
                            ({dateString} {timeString})
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowChats;