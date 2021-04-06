import React from 'react'
import "../App.css"
import TodoList from "./TodoList"
import TodoListContextProvider from "../context/TodoListContext"
import TodoForm from './TodoForm'
import Header from './Header'


const App = () => {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoListContextProvider>
  )
}

export default App
