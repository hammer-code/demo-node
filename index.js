const express = require('express');
const db = require('./db.js')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded())

const userDB  = db.createUserDB()

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('index', {
      users: userDB.getUsers()
    })
});

app.get('/tambah', function (request, response) {
    response.render('add')
});

app.post('/tambah', function (request, response) {
    const name = request.body.name;
    const user = {
        id: Math.random().toString(),
        name: name
    }
    console.log(user)
     userDB.addUser(user)

    response.redirect('/')
})

app.delete('/users/:id', function (request, response) {
    const userId = request.params.id

    userDB.removeUser(userId)

    response.json({
       'message': "Berhasil hapus"
    })
})

app.listen(4000)