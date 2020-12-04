import React from 'react';
import './Sidebar.css';
import SidebarChat from'./SidebarChat';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import { Avatar, IconButton } from "@material-ui/core";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">

                <Avatar src="https://instagram.fblr15-1.fna.fbcdn.net/v/t51.2885-19/s320x320/66418305_346866566231234_8724347672292491264_n.jpg?_nc_ht=instagram.fblr15-1.fna.fbcdn.net&_nc_ohc=xhDull_pyd0AX-r-48d&tp=1&oh=339b4f93e286072ed2053e825ada6fd5&oe=5FEEDFE0" />

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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />



                    
            </div>

        </div>
    );

}

export default Sidebar;
