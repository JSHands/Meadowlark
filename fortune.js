"use strict";

let fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

let randomFortune = () => {
	return fortunes[Math.floor(Math.random() * fortunes.length)];
};

module.exports.getRandomFortune = () => {
	return randomFortune();
};

