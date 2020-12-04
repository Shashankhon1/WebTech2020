import { Avatar, IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachmentIcon from '@material-ui/icons/Attachment';
import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import "./Chat.css";
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
function Chat() {    
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Room Name</h3>
                    <p>Last Conversation at ....</p>

                </div>

                <div className="chat__headerRight">
                <IconButton>

                    < SearchIcon/> 
                </IconButton>

                <IconButton>

                    <AttachmentIcon /> 
                </IconButton>

                <IconButton>

                    <MoreVertIcon/> 
                </IconButton>       

                </div>

            </div>

            <div className="chat__body">
                
                
                <p><div className="chat__message">
                        <span className="chat__name">kron</span>   
                        <span className="chat__msg">ejjample</span>  

                        <span className="chat__timestamp">
                            { 
                        
                            new Date().toUTCString()
                            //Current Hours
                        
                    
                            }
                        </span>

                
                    
                    </div>  
                </p>

                <p><div className="chat__message chat__receiver">
                        <span className="chat__name">kron</span>   
                        <span className="chat__msg">ejjample</span>  

                        <span className="chat__timestamp">
                            { 
                        
                            new Date().toUTCString()
                            //Current Hours
                        
                    
                            }
                        </span>

                
                    
                    </div>  
                </p>
                

                
            </div> 
            

            <div className="chat__footer">
                <EmojiEmotionsTwoToneIcon />
                <form>
                    <input 
                        placeholders = "Type your message"
                        type = "text" />
                        <button 
                        type="submit"> <IconButton><SendTwoToneIcon /> </IconButton></button>

     
                </form>
                <MicNoneTwoToneIcon />
            </div>        
                
                
                
        </div>
    );
}


export default Chat
