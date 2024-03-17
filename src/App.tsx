import firebaseConfig from './config'
import { useState } from 'react'
import './App.css'

function App() {
  type todo = { id: string, todo: string, done: boolean }

  const [todos, setTodos] = useState<todo[]>([
    { id: '1', todo: 'amongus', done: false },
    { id: '2', todo: 'boals', done: false }
  ])
  const [todo, setTodo] = useState<string>('')

  const input = document.querySelector('input')

  const newTodo = () => {
    if (input.value === '') {
      alert("Please enter a todo")
      return
    }
    const t = { id: Math.floor(Math.random() * 10).toString(), todo: todo, done: false }
    setTodos([...todos, t])
    setTodo('')
    input.value = ''
  }

  const check = (e) => {
    console.log(e.target.id)
    setTodos(todos.map((t) => {
      if (t.id === e.target.id) {
        e.target.style.textDecoration = t.done ? 'none' : 'line-through'
        return { ...t, done: !t.done }
      } else {
        return t
      }
    }))
  }


  return (
    <div className='main'>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button type="button" onClick={newTodo}></button>

      <table className='todos'>
        <td>
          <td>Todos</td>
        </td>
        <tr>
          {todos.map((e) => {
            return (
              <div id={e.id} className='todo' onClick={check}>
                <p>{e.todo}</p>
                {e.done ? 'done' : 'not done'}
              </div>
            )
          })}</tr>
      </table>
    </div>
  )
}

export default App
