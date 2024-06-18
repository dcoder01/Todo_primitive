import React, { useState } from 'react'
import { useTodo } from '../contexts/Todocontext';

function TodoItems({ todo }) {

    const {updateTodo,deleteTodo,toggleComplete}=useTodo();

    

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);


    const toggleCompleted = () => {
        // toggle completed state logic here
        toggleComplete(todo.id)

    };

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    };


    return (
        <div
            className={`d-flex border rounded p-2 mb-2 ${todo.completed ? "bg-success" : "bg-secondary"}`}
        >
            <input
                type="checkbox"
                className="form-check-input me-2"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`form-control me-2 ${isTodoEditable ? "border" : "border-0"} ${todo.completed ? "text-decoration-line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <button
                className="btn btn-outline-secondary me-2"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}

                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="btn btn-outline-danger"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItems;
