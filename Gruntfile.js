module.exports = function(grunt) {
  grunt.initConfig({
	   protractor: {
		  options: {
			configFile: "protractor.conf.js",
			keepAlive: true,
			noColor: false
		  },
		  run_cucumber: {
			options: {
			  configFile: "protractor.conf.js",
			  keepAlive: true
			}
		  }
    },
    execute: {
		htmlReport1: {
			  options: { 
						cwd: '.'
					},
					src: ['test-cucumber-html-reporter.js']
				},
		htmlReport2: {
			  options: { 
						cwd: '.'
					},
					src: ['test-cucumber-html-report.js']
				},		
		htmlReport3: {
			  options: { 
						cwd: '.'
					},
					src: ['multiple-cucumber-html-reporter.js']
				}	

	}

});

grunt.loadNpmTasks('grunt-protractor-runner');
grunt.loadNpmTasks('grunt-execute');

grunt.registerTask('default', ['protractor:run_cucumber','execute:htmlReport1']);
grunt.registerTask('run_cucumber_html', ['protractor:run_cucumber','execute:htmlReport1']);
grunt.registerTask('run_cucumber_html2', ['protractor:run_cucumber','execute:htmlReport2']);
grunt.registerTask('run_cucumber_mutiple_html', ['protractor:run_cucumber','execute:htmlReport3']);
};
