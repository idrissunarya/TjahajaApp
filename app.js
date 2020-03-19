// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
// Connect MongoDB with mongoose
mongoose.connect('mongodb://localhost:27017/TjahajaApp');

const Todo = require('./models/Todo');

// initialize our express app
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder CSS JS IMG
app.use(express.static(path.join(__dirname, 'public')));

// Route Dashboard
app.get('/dashboard', function(req, res) {
    res.render('dashboard/dashboard');
});

// Route Add Menu
app.get('/dashboard/menu', function(req, res) {
    res.render('dashboard/pages/menus/index.pug');
});

// Route todos
app.get('/dashboard/todos', function(req, res) {
    console.log('getting all todos');
    Todo.find({}).exec(function(err, todos){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(todos);
            res.json(todos);
        }
    });
});

// Start Server
var port = 3000;
app.listen(port, () => {
    console.log('server is running port number ' + port);
});