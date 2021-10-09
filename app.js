// a simple project that lets you enter books in homepage and redirect to /display page on button click

const express = require('express');
const app = express();

const book = require('./routes/book');

app.use('/', book);

app.listen(3000);