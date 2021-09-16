import './App.css';
import React, { useState } from 'react';
import Success from './success';
import Failure from './failure';
import Form from './form';

function App() {
  const [login] =  useState({
    username: 'David123', 
    password: 'Park456'
    })

  const checkLogin = (input) => {
    <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">username:</label>
      <input 
      id="username" 
      onChange={this.handleChange}
      value={this.state.username}
      />
      <label htmlFor="password">password:</label>
      <input 
      id="password" 
      onChange={this.handleChange}
      value={this.state.password} 
      type="password"
      />
        <button>Submit</button>
      </form>

    if (login.username === input.username && login.password === input.password)
    {
    return <Success user={input.username} />
    }
    else {
    return <Failure />
    }
  }
  
  return 
  
  </div>
}

export default App;
