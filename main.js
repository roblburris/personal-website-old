var express = require('express');
var app = express();

console.log('website is up and running!');

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

// app.get('/personal', function(req, res) { will add personal section later
  // res.render('personal');
// })


app.get('/contact', function(req, res) {
  res.render('contact');
})

app.listen(3000);
