import { useContext, useState, useEffect } from 'react'
import { TodoListContext } from "../context/TodoListContext"

const TodoForm = () => {
const { addTodo, clearList, editItem, editTodo } = useContext(TodoListContext)

const [title, setTitle] = useState("")

const handleSubmit = e => {
    e.preventDefault()
    if(!editItem) {
        addTodo(title)
        setTitle("")
    } else {
        editTodo(title, editItem.id)
    }
}

const handleChange = e => {
    setTitle(e.target.value)
}

useEffect(() => {
    if(editItem) {
        setTitle(editItem.title)
    } else { 
        setTitle("")
    }
}, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange}
                value={title}
                type="text" 
                className="task-input" 
                placeholder="Add Todo..."
                required
            />
            <div className="buttons">
                <button 
                    type="submit" 
                    className="btn add-task-btn">
                        {editItem ? "Edit Todo" : "Add Todo"}
                </button>
                <button
                    type="reset"
                    onClick={clearList}
                    className="btn clear-btn">
                        Clear
                </button>
            </div>
        </form>
    )
}

export default TodoForm
