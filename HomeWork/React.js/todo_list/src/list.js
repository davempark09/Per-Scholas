import React, { useState, useEffect, useRef } from 'react';

function List() {
const [todos, setTodos] = useState([
    {   addItem: 'Get Milk',
        isComplete:false,
    },
    {
        addItem: 'Wash Car',
        isComplete:false,
    },
    {
        addItem: 'Clean House',
        isComplete:false,
    }
]);
const addItemRef = useRef()

useEffect(() => {
    addItemRef.current.focus();
}, []);

const handleSubmit = e => {
    e.preventDefault();

    const formData = [{
        addItem: addItemRef.current.value,
        isComplete: false,
    }]

setTodos((prevState) => prevState.concat(formData))
addItemRef.current.value=''
};


const removeTodo = index => {
    let removedArr = [...todos].filter((_,info) => info !== index);
    setTodos(removedArr);
};


const completeTodo = index => {
    let updatedTodos = todos.slice()
    updatedTodos[index].isComplete = !updatedTodos[index].isComplete;
    setTodos(updatedTodos);
    };


return (
    <>
    <h1>Todo List</h1>


    <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' placeholder='Add a todo item' className='todo-input' ref={addItemRef} required />
        <button className='todo-button'>
            Add 
        </button>
    </form>

{todos.map((list, index) => 

    <div className={list.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div className='todo-item'>
            {list.addItem}
        </div>
        <div className='button'>
            <button
            onClick={() => completeTodo(index)}
            className='complete-icon'
            >Complete</button>

            <button
            onClick={() => removeTodo(index)}
            className='delete-icon'
            >Delete</button>
        </div>
    </div>

)}

    </>


    )}

export default List;