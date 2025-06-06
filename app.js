const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(6969);