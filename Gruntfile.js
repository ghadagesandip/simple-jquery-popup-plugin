module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*\t! <%= pkg.name %> - v<%= pkg.version %> \n\t author - <%= pkg.author %> -' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n\n'
            },
            target : {
                files : {'dist/popup.min.js':'src/popup.js'}
            }
        },

        cssmin : {
            options: {
                banner: '/*\t! <%= pkg.name %> - v<%= pkg.version %> \n\t author - <%= pkg.author %> -' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n\n'
            },
            target : {
                files : {'dist/popup.min.css':'src/popup.css'}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify', 'cssmin']);

}