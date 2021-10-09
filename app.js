const express = require('express');
const app = express();

// import people route
const people = require('./routes/people');

app.use('/people', people);

// since there is /people, our base url would be localhost:3000/people

app.listen(3000);