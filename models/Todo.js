const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    default: new Date().toLocaleString("ru", {year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC'}).slice(0, -2)
  }
})

module.exports = model('Todo', schema)
