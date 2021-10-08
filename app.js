const express = require('express');
const app = express();

app.use('/example', (req, res, next)=>{
    console.log("In the middleware");
    res.send("Example route");
    // next();
});

app.use('/', (req, res, next)=>{
    console.log("In another middleware");
    res.send("Main route");
});

app.listen(3000);