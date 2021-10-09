const express = require('express');
const route = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

route.use('/public', express.static(path.join(__dirname, '../', 'views')));
route.use(bodyParser.urlencoded({extended: false}));

// in homepage, we display bookname.html file
route.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'bookname.html'));
});

// once user submits, we display displaybook.html
// routs is given in html form action="/display"
route.post('/display', (req,res)=>{
    console.log(req.body);

    res.sendFile(path.join(__dirname, '../', 'views', 'displaybook.html'));
});

module.exports = route;