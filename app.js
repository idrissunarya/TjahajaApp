// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// initialize our express app
const app = express();

// Connect MongoDB with mongoose
mongoose.connect('mongodb://localhost:27017/TjahajaApp');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set Public Folder CSS JS IMG
app.use(express.static(path.join(__dirname, 'public')));

// Route Dashboard
app.get('/dashboard', function(req, res) {
    res.render('dashboard/dashboard');
});

// Start Server
var port = 3000;
app.listen(port, () => {
    console.log('server is running port number ' + port);
});

