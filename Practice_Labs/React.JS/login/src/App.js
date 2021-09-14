import './App.css';
import { useState } from 'react';
import Success from './success';
import Failure from './failure';
import Form from './form';

function App() {
  const [login] =  useState({
    username: 'David123', 
    password: 'Park456'
    })

  const checkLogin = (input) => {
    if (login.username === input.username && login.password === input.password)
    {
    return <Success user={input.username} />
    }
    else {
    return <Failure />
    }
  }
  
  return 
  <div>
    <Form />
  </div>
}

export default App;
