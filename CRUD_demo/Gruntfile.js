module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"],
			options: {
				globals: {
					jQuery: true,
					$: true
				},
				esversion: 7
			}
		},
		browserify: {
			dist: {
				files: {
					// destination for transpiled js : source js
					"dist/js/index.js": "src/js/index.js"
				},
				options: {
					transform: [
						["babelify", { presets: ["@babel/preset-env"] }]
					],
					browserifyOptions: {
						debug: true
					}
				}
			}
		},
		uglify: {
			options: {
				mangle: true
			},
			dist: {
				files: {
					"dist/js/index.js": ["dist/js/index.js"]
				}
			}
		},
		htmlmin: {
			// Task
			dist: {
				// Target
				options: {
					// Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					// Dictionary of files
					"dist/index.html": "src/index.html" // 'destination': 'source'
				}
			},
			dev: {
				// Another target
				files: {
					"dist/index.html": "src/index.html"
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: true,
				roundingPrecision: -1
			},
			target: {
				files: {
					"dist/css/index.css": "src/**/*.css"
				}
			}
		},
		watch: {
			js: {
				files: ["src/**/*.js", "test/**/*.js"],
				tasks: ["jshint", "browserify:dist", "uglify"]
			},
			css: {
				files: ["src/**/*.css"],
				tasks: ["cssmin"]
			},
			html: {
				files: ["src/**/*.html"],
				tasks: ["htmlmin:dist"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", [
		"jshint",
		"browserify:dist",
		"uglify",
		"htmlmin:dist",
		"cssmin",
		"watch"
	]);
};
