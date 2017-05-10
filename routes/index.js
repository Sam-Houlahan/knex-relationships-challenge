var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)
  db.userProfiles(req.app.get('connection'))
.where('users.id', id)
  .then(result => {
    const viewData = result[0]

    res.render('profiles', viewData)
  })
.catch(function (err) {
  res.status(500).send('DATABASE ERROR: ' + err.message)
})
})
module.exports = router

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const url = req.body.url

  db.addUser(req.app.get('connection'), name, email)
  .then(result => {
    console.log(Number(result))
    return db.addUserToProfile(req.app.get('connection'), url, Number(result))
  })
  .then(() => {
    res.redirect('/')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/blog', (req, res) => {
  res.render('blog')
})

router.post('/blog', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const id = req.body.user_id

  db.addBlog(req.app.get('connection'), title, content, id)
.then(() => {
  res.redirect('/')
})
.catch(function (err) {
  res.status(500).send('DATABASE ERROR: ' + err.message)
})
})

router.get('/bloglist', (req, res) => {
  db.getBlogs(req.app.get('connection'))
    .then((blogs) => {
      console.log(blogs)
      res.render('bloglist', {blogs: blogs})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
