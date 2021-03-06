
import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';
import {auth,provider} from "./firebase";
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider";

function Login()
{   const [{},dispatch]=useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user

            });
        })
           .catch((error)=>alert(error.message));

    };
    return (<div className='login'>
        <div className="login__container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0pnXicjiBecbJLNM6Ic_xiIASScNzw2TNA&usqp=CAU" />
            
            <div className="login__text">
                <h2>Sign in to Woof</h2>

            </div>

            <Button onClick={signIn}>
                Sign In with Google
            </Button>


        </div>
        
    </div>);
}

export default Login;



