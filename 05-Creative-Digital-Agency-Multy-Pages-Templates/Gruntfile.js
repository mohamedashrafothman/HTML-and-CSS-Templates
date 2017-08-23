module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: ['assets/javascript/libs/*.js', 'assets/javascript/*.js'],
                dest: 'assets/build/scripts.js'
            },
            css: {
                src: ['assets/css/libs/*.css', 'assets/css/*.css'],
                dest: 'assets/build/styles.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: ['assets/sass/style.scss'],
                    dest: 'assets/css/style.css'
                }]
            }
        },
        cssmin: {
            build: {
                files: {
                    'assets/build/min/styles.min.css': ['assets/build/styles.css', 'assets/build/!*.min.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    src: ['assets/build/scripts.js'],
                    dest: 'assets/build/min/scripts.js'
                }]
            }
        },
        watch: {
            sass: {
                files: ['assets/sass/*.scss', 'assets/sass/partials/*.scss'],
                tasks: [ 'sass', 'concat', 'cssmin' ]
            },
            uglify: {
                files: 'assets/javascript/script.js',
                tasks: ['concat' ,'uglify']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');



    // Default task(s).
    grunt.registerTask('default', ['watch']);

};