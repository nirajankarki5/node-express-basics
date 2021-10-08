// HTTP POST request with experess

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// specifying the folder
app.use('/public', express.static(path.join(__dirname, 'views')));

// allows us to parse url encoded forms
app.use(bodyParser.urlencoded({extended: false}));

// to get the html file and view in '/' route
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

// POST request
app.post('/', (req,res)=>{
    console.log(req.body);
    // some database operation here
    res.send("Form submitted successfully");
});

// 404 not found page
app.use((req,res)=>{
    res.send("<h1>404 NOT FOUND</h1>");
});

app.listen(3000);