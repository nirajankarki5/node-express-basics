const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/:userQuery', (req,res)=>{
    res.render('index', {data:{userQuery: req.params.userQuery,
                            books: ["Book 1", "Book 2", "Book 3", "Book 4"]}});
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});