var angularPage = require('../pageobject/angularJs.js');


var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout, Given, When, Then, After}) {
	setDefaultTimeout(60 * 1000);
	Given('I go to {string}', function (site) {
		angularPage.navigateTo(site);
    });
	
	When('I add {string} in the Name textbox', function (name) {
		angularPage.addName(name);
   });
	
	Then('I should see {string} in Display', function (displayname) {
		angularPage.verifyDisplayName(displayname);
   });
	
	When('I search {string} in JavaScript Projects', function (search) {
		angularPage.enterProject(search);
   });
	
	Then('I should see {int} in project search list',function(count){
		angularPage.verifyProjectCount(count);
	});
	
	
	When('I search {string} and click edit in JavaScript Projects',function(project){
		angularPage.projectEdit(project);
	});
	
	Then('Edit description as {string}',function(description){
		angularPage.editDescription(description);
	});
	
	
	Then('Click Submit', function(){
		angularPage.clickElement(angularPage.projectSubmit); 
	});
	
	Then('Project {string} description should display {string} in JavaScript Projects',function(project,description){
		angularPage.verifyProjectDescription(project,description);
	});

    After(function (testCase) {
    var world = this;
  //  if (testCase.result.status === Status.FAILED) {
      return browser.takeScreenshot().then(function(screenShot) {
        // screenShot is a base-64 encoded PNG
        world.attach(screenShot, 'image/png');
      });
   // }
  });
	 

});