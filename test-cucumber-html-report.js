const report = require('cucumber-html-report');
report.create({
  source:       'reports/result2.json',      // source json 
  dest:         'reports/html/reports',                   // target directory (will create if not exists) 
  name:         'cucumber-html-report.html',                 // report file name (will be index.html if not exists) 
  //template:     'mytemplate.html',             // your custom mustache template (uses default if not specified) 
  title:        'Cucumber Report',             // Title for default template. (default is Cucumber Report) 
  component:    'My Component',                // Subtitle for default template. (default is empty) 
  logo:         'reports/html/logo/logo.jpg',   // Path to the displayed logo. 
  screenshots:  'reports/html/screenshot',               // Path to the directory of screenshots. Optional. 
  maxScreenshots: 10                           // Max number of screenshots to save (default is 1000) 
})
.then(console.log)
.catch(console.error);
