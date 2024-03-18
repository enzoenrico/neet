import React, { useState, useRef } from 'react';
import './todo.css';

export const TodoComponent = () => {
    type Todo = { id: string; todo: string; done: boolean };

    const [todos, setTodos] = useState<Todo[]>([
        { id: '1', todo: 'amongus', done: false },
        { id: '2', todo: 'boals', done: true },
    ]);

    const [todo, setTodo] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            newTodo();
        }
    };

    const newTodo = () => {
        if (todo === '') {
            return;
        }
        const t: Todo = { id: Math.floor(Math.random() * 10).toString(), todo: todo, done: false };
        setTodos([...todos, t]);
        setTodo('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const check = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const id = target.id;
        if (!id) {
            return;
        }
        setTodos(
            todos.map((t) => {
                if (t.id === id) {
                    const parent = target.closest('.todo');
                    parent?.classList.toggle('done');
                    return {
                        ...t, done: !t.done
                    }
                }
                return t;
            })
        )
    }

    return (
        <div className='main'>
            <div className="newtodo">
                <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='type here' onKeyDown={handleEnter} ref={inputRef} />
                <button type="button" onClick={newTodo}>add Todo</button>
            </div>

            <div className="todo-list">
                {todos.map((e:Todo) => {
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