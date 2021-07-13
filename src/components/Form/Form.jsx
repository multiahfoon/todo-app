import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'

import './form.styles.css'

function Form() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit clicked')
    dispatch(addTodo({ title: todo }))
    setTodo(e.target[0].value = '')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='Add todo' required/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form
