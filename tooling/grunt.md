# Grunt

Grunt is a nodejs task runner system for frontend build task (js/css minify, complie, lint, unit test, live reload)
 
- http://12devsofxmas.co.uk/2014/01/day-10-maintaining-a-better-workflow-with-grunt/
- http://chrisawren.com/posts/Advanced-Grunt-tooling
  
Gruntfile.js
  
```js
module.exports = function(grunt) {
  // config task
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      files: {
        src: [
          "public/**/*.js",
          "!node_modules/**/*.js"
        ]
      }
    },
    copy: { //finder copy to atlas
      build: {
        cwd: "public/js/finder/",
        src: ["**"],
        dest: "/Users/ycao2/walmart/master/atlas/frontend/js/common/finder",
        expand: true
      }
    }
  });

  // load plugin tasks
  grunt.loadNpmTasks("grunt-contrib-copy");
  
  // task register
   grunt.registerTask('default', ["jshint"]); //grunt
  grunt.registerTask("sync", ["copy"]); // grunt sync; warning avoid repeat name recursion bug by not use grunt.registerTask("sameName", ["sameName"]);
};
```

### Grunt plugin 

```
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-jscs");
grunt.loadNpmTasks("grunt-newer");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-contrib-stylus");
grunt.loadNpmTasks('grunt-autoprefixer');
```
