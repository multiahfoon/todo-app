const {nanoid} = require('nanoid')
const todos = [
  {
    todo_id: nanoid(),
    title: 'Food shopping'
  },
  {
    todo_id: nanoid(),
    title: 'Wash car'
  } 
]

module.exports = todos