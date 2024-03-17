import firebaseConfig from './config'
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<String[]>(["amongus", "boals"])
  const [todo, setTodo] = useState<string>('')

  const input = document.querySelector('input')

  const newTodo = () => {
    if(input.value === ''){
      alert("Please enter a todo")
      return
    } 
    setTodos([...todos, todo])
    setTodo('')
    input.value = ''
  }


  return (
    <div className='main'>
      <input type="text" name="" id="" onChange={(e) => setTodo(e.target.value)} />
      <button type="button" onClick={newTodo}></button>

      <table className='todos'>
        <td>
          <td>Todo</td>
        </td>
        <tr>
        {todos.map((e) => {
          return <th className='todo'>
            <input type="checkbox" name="done" id="" />
            <p>{e}</p>
          </th>
        })}</tr>
      </table>
    </div>
  )
}

export default App
