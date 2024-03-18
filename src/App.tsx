import firebaseConfig from './config'
import { useState } from 'react'
import './App.css'

function App() {
  type todo = { id: string, todo: string, done: boolean }

  const [todos, setTodos] = useState<todo[]>([
    { id: '1', todo: 'amongus', done: false },
    { id: '2', todo: 'boals', done: true }
  ])

  const [todo, setTodo] = useState<string>('')

  const input = document.querySelector<HTMLInputElement>('input')

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(e.key)
      newTodo()
    }
  }

  const newTodo = () => {
    if (input.value === '') {
      // alert("Please enter a todo")
      return
    }
    const t = { id: Math.floor(Math.random() * 10).toString(), todo: todo, done: false }
    setTodos([...todos, t])
    setTodo('')
    input.value = ''
  }

  const check = (e: Event) => {
    console.log(e.target.id)
    setTodos(todos.map((t) => {
      if (t.id === e.target.id) {
        const parent = document.getElementById<HTMLDivElement>(e.target.id)?.closest('.todo')
        // e.target.classList.toggle('done')
        parent?.classList.toggle('done')
        return { ...t, done: !t.done }
      } else {
        return t
      }
    }))
  }


  return (
    <div className='main'>
      <div className="newtodo">
        <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='type here' onKeyDown={handleEnter} />
        <button type="button" onClick={newTodo}>Add Todo</button>
      </div>

      <div className="todo-list">
        {todos.map((e) => {
          return (
            <div id={e.id} className={e.done ? 'todo done' : 'todo'} onClick={check}>
              <div className="content ">
                <p id={e.id} className='task-wrapper'>
                  <p id={e.id} className='task-content'>{e.todo}</p>
                </p>
                <p id={e.id} className='task-id'>TSK-{e.id}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
