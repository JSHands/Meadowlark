"use strict";

const express = require('express');
const path = require('path');

const fortunes = require('./lib/fortune');
const tours = require('./lib/tours');

const app = express();

// Set up handlebars view engine

const hbs = require('express-handlebars')
	.create(
		{
			extname: '.hbs',
			defaultLayout: 'main'
		}
	);

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.locals.showTests = app.get('env') !== 'production' &&
			req.query.test === '1';
	next();
});

app.get('/', (req, res) => {
	res.render('home')
});

app.get('/about', (req, res) => {
	res.render('about', {
		fortune: fortunes.getRandomFortune(),
		pageTestScript: '/qa/tests-about.js'
	});
});

app.get('/tours/hood-river', (req, res) => {
	res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', (req, res) => {
	res.render('tours/request-group-rate');
});

// API

app.get('/api/tours', (req, res) => {
	res.json(tours.getTours());
});

app.put('/api/tour/:id', (req, res) => {
	
	if (tours.updateTour(req.params.id, req.query)) {
		
		res.json({
			success: true,
		});
		
	} else {
		res.json({
			error: 'No such tour exists.',
		});
	}
});

app.delete('/api/tour/:id', (req, res) => {
	
	if (tours.deleteTour(req.params.id)) {
		
		res.json({
			success: true
		})
	} else {
		res.json({
			error: 'No such tour exists.',
		});
	}
	
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