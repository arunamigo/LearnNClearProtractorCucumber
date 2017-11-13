
# LearnNClear Protractor Cucumber
LearnNClear is the organization provide online and offline tutorial for various automation tool.

`LearnNClear Protractor Cucumber HTML Report` project that
* Makes use of page objects
* Illustrate the Cucumber HTML report on cucumber project with screenshot
* Embedded with Grunt to run scripts and report generation sequentially
* Includes examples tests for Angular applications

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* `git clone https://github.com/vinohkumamahendra/LearnNClearProtractorCucumber`
* Go to folder LearnNClear-Cucumber-HTML Report
* `npm install` to install the project dependencies
* `npm run update` to update drivers (this _should_ be run automatically on install)

## Run tests:
* run tests via plain Protractor `protractor protractor.conf.js`
* run tests `npm test` (runs via protractor inbuild command)
* run with grunt using command either `grunt run_cucumber_html` or `grunt`. It automatically launch report.
* run script with cucumber-html-report by using grunt command `grunt run_cucumber_html2`. You have to check the report `cucumber-html-report.html` under the folder .\reports\html\reports once it is completed
* run script with multiple-cucumber-html-reporter report by using grunt command `grunt run_cucumber_mutiple_html`. It automatically launch report 

## Troubleshooting
* check node_modules/protractor/node_modules/webdriver-manager/selenium contains necessary driver otherwise run `node_modules/protractor/node_modules/webdriver-manager/.bin/webdriver-manager update`
* If you face any issue in updating the webdriver-manager, check if your system use proxy then add the argument `--proxy=<ProxyURL>:<proxyPort>`
* run `node -v` and make sure your node version is 6.x.x or greater

To know about us more or need supports, [Contact us](http://learnnclear.com/contact-us)
