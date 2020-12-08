import React,{useState, useEffect} from 'react';
import './SidebarChat.css';
import { Avatar } from "@material-ui/core";
import db from "./firebase";


function SidebarChat({id, name, addNewChat}) {
   /* const [seed, setSeed] = useState(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);*/

    const createChat=()=>{
        const roomName=prompt("please enter name of the chat ");

        if( roomName) {

            db.collection('pack-webtech').add({
                name: roomName,
                
            })
        }
    };



    return  !addNewChat ? (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3 font-style="Roboto">{name}</h3>
                <h6>last message at...</h6>
            </div>
        </div>
    ):(

        <div onCli = {createChat}
        className="sidebarChat">
            <p><h2>Add chat</h2></p>
            <p><h6>feature coming up real soon!</h6></p>
        </div>

    )
}

export default SidebarChat;
