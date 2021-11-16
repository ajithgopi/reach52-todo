const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoItemSchema = new Schema({
    content: String,
    date_created: Date,
    is_done: { type: Boolean, default: false }
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);