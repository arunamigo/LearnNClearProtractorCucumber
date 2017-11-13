var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
	//	theme : 'simple',
	//	theme : 'foundation',
        jsonFile: 'reports/results.json',
        output: 'reports/html/cucumber_report_Bootstrap.html',
		name: 'Vinoth Report',
        reportSuiteAsScenarios: true,
		brandTitle: 'LearnNClear',
		storeScreenshots: true,
		screenshotsDirectory: './reports/html/screenshot',
        launchReport: true,
        metadata: {
            "Test Environment": "STAGING",
            "Browser": "Chrome  60.0.3112.113",
            "Platform": "Windows 10",
            "Parallel": "None",
            "Executed": "Local"
        }
    };
 
reporter.generate(options);