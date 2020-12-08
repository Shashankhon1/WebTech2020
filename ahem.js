import React from 'react';
import axios from './axios';


import './ahem.css';

class Appy extends React.Component {
  state = {
    _id: 0x5fcf625b8dce000525787bff,
    name: '',
    message: '',
    timestamp:'',
    received: false,
    __v:0,
    messages: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/messages/sync')
      .then((response) => {
        const data = response.data;
        this.setState({ messages: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving!!!');
      });
  }

 handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      message: this.state.message,
      timestamp:this.state.timestamp,
      received:this.state.received
    };


    axios({
      url: '/messages/new',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        alert('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      _id: 0x5fcf625b8dce000525787bff,
      name: '',
    message: '',
    timestamp: '',
    received: false,
    __v: 0
      
    });
  };

  displayBlogPost = (messages) => {

    

    if (!messages.length) return null;


    return messages.map((message) => (
      <p  className={`chat__message ${ !message.received && "chat__receiver"}`} >
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
    ));
  };

  

    //JSX
    render() {
    
    return(
      

        <div className="blog-">
          {this.displayBlogPost(this.state.messages)}
        </div>
      
    );
  
}}

export default Appy;