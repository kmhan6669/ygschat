import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

function Home({ response }) {
    const [roomList, setRoomList] = useState([]);

    function creatRoomList(response) {
        const roomNames = response.map(res => res.roomname)
        const filteredRoomNames = roomNames.filter((room, index) => {
            return roomNames.indexOf(room) === index;
        })
        return filteredRoomNames;
    }
    useEffect(() => { 
        setRoomList(creatRoomList(response))
    }, [response])
    
    return (
        <div>
            {roomList.map((room) => {
                return (
                    <div key={room}>
                        <Link to={`/rooms/${room}`}>{room}</Link>
                        <Route path={`/rooms/${room}`} element={<Home />} />
                    </div>
                )
            })
            }
            <Routes>
                {roomList.map((room) => {
                    return (
                            <Route path={`/rooms/${room}`} element={<Home />} />
                    )
                })
                }
            </Routes>
        </div>
    );
}

export default Home;
