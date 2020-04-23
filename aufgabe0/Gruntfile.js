module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package-lock.json'),

		watch: {
			typescript: {
				files: ['src/ts/*.ts'],
				tasks: ['typescript'],
			},
			sass: {
				files: ['src/scss/*.scss','src/scss/*/*.scss'],
				tasks: ['sass'],
			},
		},

		typescript: {
			options: {
				module: 'commonjs', 
				target: 'es5',
				sourceMap: true,
			},
			all: {
				src: ['./src/ts/*.ts'],
				dest: './dist/js/'
			}
		},
		sass: {
       		dist: {
       		    files: {
       		        'dist/css/main.css' : 'src/scss/main.scss'
       		    },
       		},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['typescript','sass','watch']);
}