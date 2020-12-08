import React,{componentDidMount, getBlogPost , Component} from "react";

import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import { useEffect, useState} from "react";
import axios from './axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Login";
import Appy from "./ahem.js";
import { actionTypes } from "./reducer";
import {useStateValue} from "./StateProvider";


function App() {
  const [messages, setMessages]= useState([]);
 //type: actionTypes.SET_USER,
  //user: result.user,
  const [{user},dispatch]=useStateValue();


  Component.componentDidMount = () => {
    this.getBlogPost();
  };


  Component.getBlogPost = () => {
    axios.get('/messages/sync')
      .then((response) => {
        alert('data!!!');
        const data = response.data;
        setMessages ({ messages: data });
       
        console.log('Data has been received!!');
        

      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }














  useEffect(() => {
    const pusher = new Pusher('004fbae83e25ec592f82', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
     // alert(JSON.stringify(data));
      setMessages([...messages,data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      {!user ?(
         
        <Login/>
      ):

        (
      
      <div className="app__body">
        
        
        <Router>
        <Sidebar />
          <Switch>

          <Route path ="/messages">
            
            
            
       
            
            <Chat messages={messages} />
            
          </Route> 



            <Route path ="/">
            
           
            
            <Chat messages={messages} />
           
            
                
            </Route>

            
          </Switch>

        </Router>


      </div>
      )}

      
      




     

    </div>
  );
}

export default App;
