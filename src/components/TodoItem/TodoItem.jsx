import React from 'react'
import './TodoItem.styles.css'

function TodoItem({todo}) {
  const {title, completed} = todo

  return (
    <div className='inputStyle'>
      <input type="checkbox" defaultChecked={completed} />
      <p>{title}</p>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem
