// server.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/evBattery', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err)); 

    
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the form
app.get('/', (req, res) => {
    res.render('index');
});
