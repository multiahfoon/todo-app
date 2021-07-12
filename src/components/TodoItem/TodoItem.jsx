import React from 'react'
import './TodoItem.styles.css'

function TodoItem() {
  return (
    <div className='inputStyle'>
      <input type="checkbox" defaultChecked=''/>
      <p>Todo</p>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem
