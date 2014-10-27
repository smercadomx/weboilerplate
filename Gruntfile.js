module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            all: {
                files: [
                    'js/**/*.js',
                    '**/*.html',
                    'sass/**/*.scss',
                    'css/**/*.css',
                    'spec/*Spec.js'
                ],
                tasks: ['compass', 'jasmine'],
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
        },

        jasmine: {
            src: 'js/src/**/*.js',
            options: {
                specs: 'spec/*Spec.js',
                helpers: 'spec/helpers/*.js',
                vendor: [
                    'js/vendor/**/*.js',
                    'http://code.jquery.com/jquery-1.10.1.min.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['compass', 'jasmine', 'uglify']);
};