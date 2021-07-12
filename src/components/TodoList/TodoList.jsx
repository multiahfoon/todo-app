import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../redux/todoSlice'

import TodoItem from '../TodoItem/TodoItem'

function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div>
      {
        todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />
        })
      }
    </div>
  )
}

export default TodoList
