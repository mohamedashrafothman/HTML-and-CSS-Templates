module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		concat: {
			js: {
				src: ['public/javascript/libs/*.js', 'public/javascript/*.js'],
				dest: 'public/dist/scripts.js',
			},
			css: {
				src: ['public/css/libs/*.css', 'public/css/*.css'],
				dest: 'public/dist/styles.css',
			},
		},
		pug: {
			compile: {
				options: {
					client: false,
					pretty: true,
					data: {
						debug: false,
					},
				},
				files: {
					'index.html': ['views/index.pug'],
					'stores.html': ['views/stores.pug'],
					'tags.html': ['views/tags.pug'],
					'login.html': ['views/login.pug'],
					'register.html': ['views/register.pug'],
					'hearted.html': ['views/hearted.pug'],
					'account.html': ['views/account.pug'],
					'editStore.html': ['views/editStore.pug']
				},
			},
		},
		sass: {
			build: {
				files: [
					{
						src: ['public/sass/style.scss'],
						dest: 'public/css/style.css',
					},
				],
			},
		},
		cssmin: {
			build: {
				files: {
					'public/dist/min/styles.min.css': [
						'public/dist/styles.css',
						'public/dist/!*.min.css',
					],
				},
			},
		},
		uglify: {
			my_target: {
				files: [
					{
						src: ['public/dist/scripts.js'],
						dest: 'public/dist/min/scripts.min.js',
					},
				],
			},
		},
		watch: {
			sass: {
				files: ['public/sass/**/*.scss'],
				tasks: ['sass', 'concat', 'cssmin'],
			},
			uglify: {
				files: 'public/javascript/**/*.js',
				tasks: ['concat', 'uglify'],
			},
			pug: {
				files: ['views/**/*.pug'],
				tasks: ['pug'],
			},
		},
	});

	// Load the plugins that provides the tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-sass');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};
