import { Avatar, IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachmentIcon from '@material-ui/icons/Attachment';
import React ,{useState, useEffect, Component}from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';
import "./Chat.css";
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import axios from './axios';
import {useStateValue} from "./StateProvider";





function Chat({messages}) { 

    //React.Component.state = {
        //messages: []
     // };
    

    
    

    const [input, setInput] =  useState("")
    var ok =new Date().toUTCString()
    const [{user},dispatch]=useStateValue();


    const sendMessage = async (e)=>{
        e.preventDefault();
       
        axios.post('/messages/new',{
            message: input,
            name: user.displayName,
            timestamp: ok,
            received: true
        
            

    });

    

    setInput("");

};    
    return (
        <div className='chat'>

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Common group</h3>
                    <p>Last Conversation at </p>
                    <span className="chat__timestamp">
                            { 
                        
                            new Date().toUTCString()
                            //Current Hours
                        
                    
                            }
                        </span>

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
            { messages.map( (message)=>(

                <p className={`chat__message ${ message.name===user.displayName && "chat__receiver"}`} >   
                    <span className="chat__name">{message.name}</span>   
                    <span className="chat__msg">{message.message}</span>  
    
                    <span className="chat__timestamp">
                            { 
                            message.timestamp
                        
                            //new Date().toUTCString()
                            //Current Hours
                        
                    
                            }
                    </span>


                </p>

            ))}

                   

                
               

               
            
                

                
            </div> 
            

            <div className="chat__footer">
                <EmojiEmotionsTwoToneIcon />
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} placeholders = "Type your message"
                        type = "text" />
                        <button onClick= {sendMessage} type="submit"> <IconButton><SendTwoToneIcon /> </IconButton></button>

     
                </form>
                <MicNoneTwoToneIcon  type="voice"/>
            </div>        
                
                
                
        </div>
    );
}


export default Chat;


