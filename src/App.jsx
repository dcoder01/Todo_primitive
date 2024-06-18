import { useEffect, useState } from 'react'
import { Todoprovider } from './contexts/Todocontext'
import TodoItems from './components/TodoItems'
import TodoForm from './components/TodoForm'

function App() {
  
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((el) => (el.id === id ? todo : el)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
 
  //local storage
  //not server site
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <Todoprovider value={{ todos, toggleComplete, addTodo, updateTodo, deleteTodo }}>
      <div className="bg-dark min-vh-100 py-4">
        <div className="container  text-white">
          <h1 className="text-center mb-4">Manage Your Todos</h1>
          <div className="mb-3">
            <TodoForm />
          </div>
          <div className="d-flex flex-column">
            {todos.map((todo) => (
              <div key={todo.id}

              >
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App

