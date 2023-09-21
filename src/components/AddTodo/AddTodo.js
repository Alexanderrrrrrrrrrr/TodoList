import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './AddTodo.module.css'

function AddTodo ({todo,setTodo}) {

const [value, setValue] = useState('')

function saveTodo(){
 setTodo(
    [...todo,{
        id: uuidv4(),
        title: value,
        status: true
    }]
 )
 setValue('')
}

    return (
        <div className={s.addTodoForm}>
            <input className={s.addTodoInput} placeholder=" Введите задачу" value={value} onChange={ (e)=>setValue(e.target.value)} />
            <button className={s.addTodoBtn} onClick={saveTodo}>Сохранить</button>
        </div>
    )
}
export default AddTodo


