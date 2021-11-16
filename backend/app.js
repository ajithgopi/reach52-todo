var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')

require('dotenv').config()

var appRouter = require('./routes/app');

var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', appRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

module.exports = app;