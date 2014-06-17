module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        paths: {
            src: [
                'src/index.js',
                'src/blocks/index.js',
                'src/blocks/textLength.js'
            ]
        },

        jshint: {
            options: {jshintrc: '.jshintrc'},
            all: [
                'Gruntfile.js',
                'src/**/*.js',
                'test/**/*.test.js'
            ]
        },

        watch: {
            src: {
                files: [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'test/**/*.test.js'
                ],
                tasks: ['default'],
                options: {
                    atBegin: true
                }
            }
        },

        concat: {
            goBlockly: {
                src: ['<%= paths.src %>'],
                dest: 'go-proto-blockly.js'
            }
        },

        karma: {
            dev: {
                options: {
                    files: [
                        '<%= paths.src %>',
                        'test/**/*.test.js'
                    ]
                },
                singleRun: true,
                reporters: ['dots'],
                browsers: ['PhantomJS'],
                frameworks: ['mocha', 'chai'],
                plugins: [
                    'karma-chai',
                    'karma-mocha',
                    'karma-phantomjs-launcher'
                ]
            }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'karma'
    ]);

    grunt.registerTask('build', [
        'concat'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
