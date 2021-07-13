import React from 'react'
import './TodoItem.styles.css'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../../redux/todoSlice'

function TodoItem({ todo }) {
  const { id, title, completed } = todo
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }))
  }

  const handleCheckClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }))
  }

  return (
    <div className='inputStyle'>
      <input type="checkbox" onClick={handleCheckClick} defaultChecked={completed} />
      <p>{title}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default TodoItem
