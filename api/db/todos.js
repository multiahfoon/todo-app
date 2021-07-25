const {nanoid} = require('nanoid')
const todos = [
  {
    id: nanoid(),
    title: 'Food shopping',
    completed: false
  },
  {
    id: nanoid(),
    title: 'Wash car',
    completed: true
  }
]

module.exports = todos