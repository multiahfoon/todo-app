import React from 'react'
import './TodoItem.styles.css'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../redux/todoSlice'

function TodoItem({ todo }) {
  const { id, title, completed } = todo
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(deleteTodo({id}))
  }

  return (
    <div className='inputStyle'>
      <input type="checkbox" defaultChecked={completed} />
      <p>{title}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default TodoItem
