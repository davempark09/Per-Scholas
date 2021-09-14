import React, { useState } from 'react';
​

function Form () {
        ​
    handleChange = event => {
        setInput({ input = event.target.value })
    }
​
    handleSubmit = event => {
        event.preventDefault()
        checkLogin()
    }
​
        return (  
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
​
                <button>Submit</button>
            </form>
        );
}
export default Form;