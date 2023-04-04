import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Home from './pages/Home';
import Friends from './pages/Friends';
import { getMessages, postMessage } from './hooks/chatMessagesAPIs';

const DUMMY_RESPONSE = [
  { id: 1, username: 'han', roomname: 'room1', text: 'text1' },
  { id: 2, username: 'han', roomname: 'room2', text: 'text2' },
  { id: 3, username: 'karina', roomname: 'room2', text: 'text3' },
  { id: 4, username: 'karina', roomname: 'room2', text: 'text4' }
];

function App() {
  const [response, setResponse] = useState([]);
  const [btnActive, setBtnActive] = useState("");

  //서버 연결 불가 시
  useEffect(() => { 
    setResponse(DUMMY_RESPONSE)
  
  }, [])
  //서버 연결 가능 시
  // useEffect(() => { 
  //     setInterval(async () => {
    //       await getMessages()
    //         .then((resData) => {
      //           setResponse(resData)
      
      //         })
      
      //     }, 1000);
      //   }, [])
  
  const toggleActive = (e) => {
    console.log(e)
    setBtnActive((prev) => {
      return e
    });
  };

  return (
    <div>
      <BrowserRouter>
        <div className='contents'>
          <ul className='nav'>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li >
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
          <div className='contentsinfo'>
            <Routes>
              <Route path={`/`} element={<Home response={response}/>} />
              <Route path="friends" element={<Friends />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
