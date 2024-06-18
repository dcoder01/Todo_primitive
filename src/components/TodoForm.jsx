import React, { useState } from 'react'
import { useTodo } from '../contexts/Todocontext';

function TodoForm() {
    const [todo, setTodo]=useState("");
    const {addTodo}= useTodo();

    const add= (e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({ todo, completed: false})
        setTodo("")
    }
    return (
        <form onSubmit={add} className="d-flex">
            <input
                type="todo"
                placeholder="Write Todo..."
                className="form-control me-2"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
                Add
            </button>
        </form>
    );
}

export default TodoForm;