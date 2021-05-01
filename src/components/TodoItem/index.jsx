import React from 'react'
import {useDispatch } from 'react-redux'
import { delete_todo, toggle_todo } from '../../store/actions/todoList'

const TodoItem = ({ todo,  id}) => {
    const dispatch = useDispatch()

    return <div
        style={
            {
                
                textDecoration: todo.complete ? 'line-through' : 'none'
            }
        }>
        <span>
            {todo.text}
        </span>
        <button onClick={() => dispatch(toggle_todo(id))}>complete</button>
        <button onClick={()=> dispatch(delete_todo(id))}>delete</button>
    </div>
}




export default TodoItem