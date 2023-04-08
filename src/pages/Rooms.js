import { useState } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import CreateRoom from "../components/room/CreateRoom";

import './Rooms.css';

function Rooms({ rooms }) {

    return (
        <div  className="rooms">
            <CreateRoom/>
            <div className="roomlist" >
            {rooms.map((room) => {
                return (
                    <div  key={room}>
                        <Link className="room" to={room}>{room}</Link>
                    </div>
                )
            })
            }   
            </div>
        </div>
    );
}

export default Rooms;
