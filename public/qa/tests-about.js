(function () {
	"use strict";
	
	let assert = chai.assert;
	
	suite(`"About" Page Tests`, () => {
		test('page should contain a link to contact page', () => {
			assert(document.querySelectorAll('a[href="/contact"]').length);
		})
	});
})();
