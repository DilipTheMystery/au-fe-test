module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      options: {
        layoutdir: 'src/html/layouts',
        flatten: true,
        layout: 'default.hbs',
        partials: 'src/html/components/*.hbs',
        data: [
          'src/html/data/*.{json, yml}'
        ]
      },
      page: {
        files: {
          'dist/': ['src/html/pages/*.hbs']
        }
      }
    },
    less: {
      src: {
        expand: true,
        cwd: "src/less",
        src: "**/*.less",
        dest: "dist/css",
        ext: ".css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['assemble', 'less']);
};