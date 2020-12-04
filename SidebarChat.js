import React from 'react';
import './SidebarChat.css';
import { Avatar } from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3 font-style="Roboto">Room name</h3>
                <p>something</p>
            </div>
        </div>
    );
}

export default SidebarChat;
