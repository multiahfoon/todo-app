// this file contains all related request types for users
const express = require('express')
const router = express.Router()
const todos = require('../db/todos')


router.get('/', (req, res) => res.send(todos));

// export all routes that have been defined in this file
module.exports = router