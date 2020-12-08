import React,{useState,useEffect} from 'react';
import './Sidebar.css';
import SidebarChat from'./SidebarChat';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import db from './firebase';
import { Avatar, IconButton } from "@material-ui/core";
import {useStateValue} from "./StateProvider";
function Sidebar() {
    const [rooms,setRooms]=useState([]);
    const [{user},dispatch]=useStateValue();

    useEffect(()=>{
        db.collection('pack-webtech').onSnapshot(snapshot =>{
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),


                })
                
                
                
                ))
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">

                <Avatar src={user?.photoURL} />

                <div className="sidebar__headerRight">
                    <IconButton>

                        <DonutSmallOutlinedIcon /> 
                    </IconButton>

                    <IconButton>

                        <ChatBubbleTwoToneIcon/> 
                    </IconButton>

                    <IconButton>

                        <MoreVertTwoToneIcon/> 
                    </IconButton>
                          

                </div>



            </div>

            <div className="sidebar_search">
                <div className="sidebar__searchContainer">
                <PageviewRoundedIcon />
                <input placeholder="Search/start a chat" type="text" />
                    
                    
                </div>



            </div>


            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room =>(
                    <SidebarChat key= {room.id} id ={ room.id}
                    name={room.data.name} />

                ))


                }


                    
            </div>

        </div>
    );

}

export default Sidebar;
