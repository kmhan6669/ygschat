import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Rooms from './pages/Rooms';
import Friends from './pages/Friends';
import { getMessages } from './apis/chatMessagesAPIs';
import Chats from './pages/Chats';
import Home from './pages/Home';

import './App.css';

function App() {
  const [response, setResponse] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [btnColor, setBtnColor] = useState('curr')

  function creatRoomList(response) {
      const roomNames = new Set(response.map(res => res.roomname)) 
      const filteredRoomNames = [...roomNames]
      return filteredRoomNames;
  }

  useEffect(() => { 
    const interval = setInterval(() => {
      getMessages()
        .then((resData) => {
          setResponse(resData)
        })
    }, 1000);
    return (() =>{clearInterval(interval)})
  }, [])

  useEffect(()=>{
    setRooms(creatRoomList(response))
  }, [response])

  return (
    <div className='app'>

      <BrowserRouter >
        <div className='componenets'>
          <ul className='ul'>
            <li >
              <Link 
                to='/rooms'
                className={`btn ${btnColor === 'curr' ? 'active' : ''}`} 
                onClick={() => setBtnColor('curr')} 
              >
                Rooms
              </Link>
            </li>
            <li >
              <Link 
                to='/friends' 
                className={`btn ${btnColor === 'prev' ? 'active' : ''}`} 
                onClick={() => setBtnColor('prev')} 
              >
                Friends
              </Link>
            </li>
          </ul>
          <div className='routes'>
            <Routes >
              <Route path='/rooms' element={<Rooms rooms={rooms} />}/>
              <Route path='friends' element={<Friends />} />
              {rooms.map((room) => {
                    return (
                        <Route key={room} path={`rooms/${room}`} element={<Chats response={response} room={room}/>} />
                    )
                })
                }
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
