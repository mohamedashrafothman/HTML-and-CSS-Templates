/*
	1- config our task and tell us plugins where to find certain file.
	2- load plugins into the file .
	3- register tasks which need to be run.
*/


module.exports = function(grunt){
	// 1- config our tasks
	grunt.initConfig({
		watch: {
			sass:{
				files: ['assets/sass/*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
			dist: {
				files: {
					'assets/css/style.css': 'assets/sass/style.scss',
					'assets/css/responsive.css':'assets/sass/responsive.scss'
				}
			}
		}
	});

	// 2- load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// 3- register tasks
	grunt.registerTask('default', ['watch']);

};
