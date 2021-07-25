const {nanoid} = require('nanoid')
const todos = [
  {
    todo_id: nanoid(),
    title: 'Food shopping',
    completed: false
  },
  {
    todo_id: nanoid(),
    title: 'Wash car',
    completed: true
  }
]

module.exports = todos