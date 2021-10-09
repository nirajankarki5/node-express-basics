const express = require('express');
const route = express.Router();

route.use((req,res,next)=>{
    console.log('middleware being used');
    next();
});
// if we do not call people in app.js, then this middleware will not be used

route.get('/', (req,res)=>{
    res.send('/ being hit');
});

route.get('/example', (req,res)=>{
    res.send('/example being hit');
});

module.exports = route;