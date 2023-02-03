const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const todoSchema = new mongoose.Schema(
    {
        todo: {
            type: String,
            required: true
        },
        userId: objectId,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("todo", todoSchema)