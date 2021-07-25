// this file contains all related request types for users
const express = require('express')
const router = express.Router()
const todos = require('../db/todos')
const { nanoid } = require('nanoid')

router.get('/', (req, res) => res.send(todos))

router.post('/', (req, res) => {
  const newTodo = { id: nanoid(), title: req.body.title, completed: false }
  todos.push(newTodo)
  return res.send(todos)
})

router.patch('/', (req, res) => {
  const { id, title } = req.body
  const index = todos.findIndex(todo => todo.id === id)
  index !== -1 ? todos[index].title = title : null
  return res.send(todos)
})

router.delete('/', (req, res) => {
  const { id } = req.body
  const index = todos.findIndex(todo => todo.id === id)
  index !== -1 ? todos.splice(index, 1) : null
  return res.send(todos)
})

// export all routes that have been defined in this file
module.exports = router