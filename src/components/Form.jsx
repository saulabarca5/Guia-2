import React,{useState} from 'react'
import Todo from '../components/Todo'




const Form = () => {
    const [todo, setTodo]= useState({})
    const [cantidad, setCantidad]= useState({})
    const [todos, setTodos] = useState([])
    const [cantidas, setCantidas]= useState([])

     const handleChange = e => setTodo({[e.target.name]: e.target.value})
     const changes = e => setCantidad({[e.target.name]: e.target.value})

     //validando cajs ed texto
     const handleClick = e => 
     {
        setTodos([...todos, {todo: todo.todo,cantidad:cantidad.cantidad}])
        
     }

     //----------------------------------------------------------------------------------------------------
     const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
     }
     
    
     return (
        <>
                <form onSubmit={e => e.preventDefault()}>
                    <label>Agregar tarea</label><br />
                    <input type="text" name='todo' onChange={handleChange} placeholder='Dato'></input>
                    <input type="number" name='cantidad' onChange={changes} placeholder='cantidad'></input>
                    <button onClick={handleClick}>agregar</button>
                </form>
                {
            todos.map((value,index)=>(<Todo  todo={value} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
    )
}
export default Form