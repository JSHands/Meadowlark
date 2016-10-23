"use strict";

const Immutable = require('immutable');

let tours = [
	{ id: 0, name: 'Hood River', price: 99.99 },
	{ id: 1, name: 'Oregon Coast', price: 149.95 },
];

let getTours = () => {
	
	return Immutable.fromJS(tours);
	
};

let findTour = (id) => {
	
	for (let i = 0; i < tours.length; ++i) {
		if (Number(tours[i].id) === Number(id)) {
			return tours[i];
		}
	}
	
	return null;
};

let updateTour = (id, info) => {
	
	if (!id) {
		return false;
	}
	
	let tour = findTour(id);
	
	if (tour) {
		
		if(info.name) {
			tour.name = info.name;
		}
		
		if(info.price) {
			tour.price = info.price;
		}
	
		return true;
		
	} else {
		
		return false;
		
	}
};

let deleteTour = (id) => {
	let tour = findTour(id);
	
	if (tour) {
		tours.splice(tours.indexOf(tour), 1);
		return true;
	} else {
		return false;
	}
};

module.exports = {
	getTours: getTours,
	deleteTour: deleteTour,
	updateTour: updateTour
};
	