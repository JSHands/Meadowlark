"use strict";

const express = require('express');
const path = require('path');

const fortunes = require('./lib/fortune');

const app = express();

app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home')
});

app.get('/about', (req, res) => {
	res.render('about', {fortune: fortunes.getRandomFortune()});
});

// Custom 404 page

app.use((req, res) => {
	res.status(404);
	res.render(404);
});

// Custom 500 page

app.use((error, req, res, next) => {
	console.log(error.stack);
	res.status(500);
	res.render(500);
});

app.listen(app.get('port'), () => {
	console.log("Express started on http://localhost:" + app.get('port') +
	'; press Ctrl-C to terminate.');
});