'use strict';

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../', 'dist')));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/project', (req, res) => {
  res.render('project');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
