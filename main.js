var express = require('express');
var app = express();

console.log('helllooooo');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/resume', function(req, res) {
  res.render('resume');
})

app.get('/projects', function(req, res) {
  res.render('projects');
})

app.get('/personal', function(req, res) {
  res.render('personal');
})


app.get('/contact', function(req, res) {
  res.render('index');
})

app.listen(3000);
