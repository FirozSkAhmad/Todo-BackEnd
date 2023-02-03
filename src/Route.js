const express = require('express');
const { createTodo, getTodo, updateTodo, deletedTodo } = require('./controllers/todoController');
const { createUser, login } = require('./controllers/userController');
const { authentication, authorization, authorization1 } = require('./middlewares/auth');

const router = express.Router()

// router.get('/get', function (req, res) {
//     res.send("Working fine")
// })

router.post('/createuser', createUser);
router.post('/login', login)
router.post('/createTodo/:userId', authentication, authorization, createTodo)
router.get('/getTodo/:userId', authentication, authorization, getTodo)
router.put('/updateTodo/:todoId', authentication, authorization1, updateTodo)
router.delete('/deleteTodo/:todoId', authentication, authorization1, deletedTodo)

module.exports = router