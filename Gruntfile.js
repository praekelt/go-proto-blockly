module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.initConfig({
        paths: {
            src: [
                'templates.js',
                'src/index.js',
                'src/blocks/index.js',
                'src/blocks/opts/index.js',
                'src/blocks/**/*.js',
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
                    'templates/**/*.hbs',
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

        handlebars: {
            compile: {
                options: {
                    namespace: "goBlockly.templates"
                },
                files: {
                    "templates.js": "templates/**/*.hbs"
                }
            }
        },

        karma: {
            dev: {
                options: {
                    files: [
                      'test/init.js',
                      {
                          included: false,
                          pattern: [
                              'bower_components/closure-library-read-only',
                              '**/*',
                          ].join('/')
                      },
                      'bower_components/blockly/blockly_uncompressed.js',
                      'bower_components/blockly/generators/**/*.js',
                      'bower_components/blockly/blocks/**/*.js',
                      'bower_components/handlebars/handlebars.js',
                      {
                          pattern: 'bower_components/blockly/**/*',
                          included: false
                      },
                      '<%= paths.src %>',
                      'test/setup.js',
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
        'handlebars',
        'karma'
    ]);

    grunt.registerTask('build', [
        'concat'
    ]);

    grunt.registerTask('default', [
        'build',
        'test'
    ]);
};
