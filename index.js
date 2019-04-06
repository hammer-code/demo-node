const express = require('express');
const dbFactory = require('./db-factory.js')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
  origin: '*'
}))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const userDB  = dbFactory.createUserDB()

app.get('/users', function (request, response) {
  response.json({
    users: userDB.getUsers()
  })
});


app.post('/users', function (request, response) {
  const name = request.body.name

  if (!name) {
    return response.status(422).json({
      message: '`name` field is required'
    })
  }
  const user = {
    id: Math.random().toString(),
    name: name
  }
    
  userDB.addUser(user)

  response.json({
     user: user
  })
})

app.delete('/users/:id', function (request, response) {
  const userId = request.params.id

  userDB.removeUser(userId)

  response.json({
    message: 'User been deleted'
  })
})

app.listen(4000, () => {
  console.log('Server running on port')
})