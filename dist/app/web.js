var gzippo = require('gzippo');
var express = require('express');
var app = express();

// app.use(express.morgan('dev'));
app.use(gzippo.staticGzip(__dirname + "/"));
app.listen(process.env.PORT || 5000);