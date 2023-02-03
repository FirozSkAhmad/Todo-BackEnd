const todoModel = require('../model/todoModel')
const { isValid } = require('../validations')

async function createTodo(req, res) {
    try {
        const data = req.body
        if (!data["todo"]) {
            return res.status(400).send({ msg: `required todo` })
        }
        if (!isValid(data["todo"])) {
            return res.status(400).send({ msg: `todo must be in string formate` })
        }
        data.userId = req.params.userId
        const createdTodo = await todoModel.create(data)
        return res.status(201).send({ createdTodo })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function getTodo(req, res) {
    try {
    res.header("Access-Control-Allow-Origin", "*");
        const userId = req.params.userId
        const getTodo = await todoModel.find({ userId }).select({todo: 1})
        return res.status(200).send({ Todos: getTodo })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function updateTodo(req, res) {
    try {
        const data = req.body
        if (!data["todo"]) {
            return res.status(400).send({ msg: `required todo` })
        }
        if (!isValid(data["todo"])) {
            return res.status(400).send({ msg: `todo must be in string formate` })
        }
        const todoId = req.params.todoId
        const updatedTodo = await todoModel.findByIdAndUpdate({ _id: todoId }, data, { new: true })
        return res.status(201).send({ updatedTodo })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function deletedTodo(req, res) {
    try {
        const data = req.body
        const todoId = req.params.todoId
        const deletedTodo = await todoModel.findByIdAndDelete({ _id: todoId }, data)
        if (deletedTodo) {
            return res.status(201).send({ msg: "deleted successfully" })
        }
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports = { createTodo, getTodo, updateTodo, deletedTodo }