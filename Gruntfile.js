module.exports = function(grunt){
	
	// load plugins
	[
		'grunt-cafe-mocha',
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});
	
	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { src: 'public/qa/**.js', options: { ui: 'tdd' }, }
		},
	});
	
	// register tasks
	grunt.registerTask('default', ['cafemocha']);
};