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
        pug: {
            compile: {
                options: {
                    client: false,
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    'index.html': ['views/index.pug'],
                    'about.html': ['views/about.pug'],
                    'portfolio-1.html': ['views/portfolio-1.pug'],
                    'contact.html': ['views/contact.pug'],
                    'single-project-1.html': ['views/single-project-1.pug'],
                    'single-project-2.html': ['views/single-project-2.pug'],
                    'services.html': ['views/services.pug'],
                }
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
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass','concat', 'cssmin' ]
            },
            uglify: {
                files: 'assets/javascript/script.js',
                tasks: ['concat' ,'uglify']
            },
            pug: {
                files: ['views/**/*.pug'],
                tasks: ['pug']
            }
        }
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