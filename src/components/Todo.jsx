import React from 'react'

const Todo = ({todo, index, deleteTodo, cantidad}) => {
    return (
        <div>
            <h3>{todo.cantidad} - {todo.todo}</h3>
            <button className="btn-delete" onClick={()=>deleteTodo(index)}>x</button>
        </div>
        
    )
}
export default Todo