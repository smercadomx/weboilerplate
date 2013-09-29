module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            all: {
                files: ['**/*.js', '**/*.html', '**/*.scss', '**/*.css'],
                tasks: ['compass', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/main.min.js': ['js/vendor/*.js', 'js/src/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass', 'uglify']);
};