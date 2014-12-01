module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      mainJS: {
        options: {
          baseUrl: 'public/js/',
          paths: {
            desktop: 'app/config/Init',
            socketio: 'empty:'
          },
          wrap: true,
          name: 'libs/almond/almond',
          preserveLicenseComments: false,
          optimize: 'uglify',
          mainConfigFile: 'public/js/app/config/Init.js',
          include: [ 'desktop' ],
          out: 'public/js/app/config/Init.min.js'
        }
      },
      mainCSS: {
        options: {
          optimizeCss: 'standard',
          cssIn: './public/css/app.css',
          out: './public/css/app.min.css'
        }
      }
    },
    jshint: {
      files: [ 'Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js' ],
      options: {
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true
        }
      }
    },
    jasmine: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: [ 'server/test/*.js' ]
      }
    },
    shell: {
      copyBootstrapCSS: {
        command: 'cp ./public/js/libs/bootstrap/dist/css/bootstrap.min.css ./public/css/bootstrap.css'
      },
      copyFontAwesomeCSS: {
        command: 'cp ./public/js/libs/font-awesome/css/font-awesome.min.css ./public/css/font-awesome.css'
      },
      copyFontAwesomeFonts: {
        command: 'cp -r ./public/js/libs/font-awesome/fonts/* ./public/fonts'
      }
    },
    less: {
      production: {
        options: {
          paths: [ 'public/css' ]
        },
        files: {
          'public/css/includes/css/custom.css': 'public/css/includes/less/custom.less'
        }
      }
    },
    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'public/js/app/auth/classes',
            src: ['*.jsx'],
            dest: 'public/js/app/auth/classes',
            ext: '.js'
          },
          {
            expand: true,
            cwd: 'public/js/app/feedback/classes',
            src: ['*.jsx'],
            dest: 'public/js/app/feedback/classes',
            ext: '.js'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          open: true,
          keepalive: true,
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', '*');
                next();
            });

            return middlewares;
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('init', ['shell:copyBootstrapCSS', 'shell:copyFontAwesomeCSS', 'shell:copyFontAwesomeFonts', 'less:production', 'react', 'requirejs:mainJS', 'requirejs:mainCSS']);
  grunt.registerTask('build', ['less:production', 'react', 'requirejs:mainJS', 'requirejs:mainCSS']);
  grunt.registerTask('default', ['init', 'test', 'build', 'connect']);

};
