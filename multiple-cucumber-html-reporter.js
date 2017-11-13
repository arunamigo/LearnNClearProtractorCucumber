const report = require('multiple-cucumber-html-reporter');



report.generate({
    jsonDir: './reports/',
    reportPath: './mutiplehtml/',
	openReportInBrowser: true,
	saveCollectedJSON: true
});
