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


router.get('/users/:id', (req,res) =>{

  const id = Number(req.params.id)
db.userProfiles(req.app.get('connection'))
.where('users.id', id)
.then(result => {

    const viewData = result[0]


console.log(result)
  res.render('profiles',viewData)
})

})
module.exports = router
