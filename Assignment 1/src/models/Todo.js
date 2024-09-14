// src/models/Todo.js
// Olaide  
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);