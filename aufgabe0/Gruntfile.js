module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			typescript: {
				files: ['src/assets/ts/*.ts'],
				tasks: ['typescript','eslint'],
			}
		},

		typescript: {
			options: {
				module: 'commonjs',
				sourceMap: true,
				target: 'es6',
			},
			all: {
				src: ['./src/assets/ts/*.ts','./src/assets/ts/*/*.ts'],
				dest: './dist/assets/js/',
			},
		},

		eslint: {
        	options: {
				configFile: '.eslintrc',
				useEslintrc: false,
        	},
        	target: ['./src/assets/ts/file.ts'],
    	},
	});
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['typescript','eslint','watch']);

};