module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
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
            app: {
                src: [
                    'src/index.js',
                    'src/blocks/index.js',
                    'src/blocks/textLength.js'
                ],
                dest: 'go-proto-blockly.js'
            }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'build'
    ]);

    grunt.registerTask('build', [
        'concat'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
