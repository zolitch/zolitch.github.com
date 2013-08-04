
/*jshint laxcomma:true, white:false  */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['public/js/*.js']
    },
    watch: {
      scripts: {
        files: ['public/js/*.js'],
        tasks: ['jshint'],
        options: {
          interrupt: true
        }
      }
    },
    stylus: {
      compile: {
        options: {
          paths: ['css/core.styl'],
          use: [
            require('fluidity') // use stylus plugin at compile time
          ]
        },
        files: {
          'public/css/core.css': 'css/core.styl' // 1:1 compile
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // Default task(s).
  grunt.registerTask('dev', ['watch', 'jshint']);
  grunt.registerTask('stylus', ['stylus']);
  grunt.registerTask('default', ['jshint']);
};