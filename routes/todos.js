const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

const options = {
  hour: 'numeric',
  minute: 'numeric',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC'
}

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    date: new Date().toLocaleString("ru", options)
  })
  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed

  await todo.save()
  res.redirect('/')
})


module.exports = router
