var basePage = require('../pageobject/basePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var AngulJsPage = function() {

	this.url = 'https://angularjs.org/';
    this.pageLoaded = this.inDom(element(by.xpath('//h2[text()="AngularJS"]')));
    
	//The Basics
	this.Name = element(by.model('yourName'));	
    this.DisplayName = element(by.css('[app-run="hello.html"]')).element(by.tagName('h1'));
    
    //todolist
    this.todoTextBox = element(by.model('todoList.todoText'));
    this.todoSubmitButton = element(by.css('input[ng-model="todoList.todoText"] + input[type="submit"]'));
    //this.actulDescriptionTxt = element(by.css('[ng-controller="TodoListController as todoList"]')).all(by.tagName('span')).get(0).getText();
    this.allTodoListCheckbox = element.all(by.repeater('todoList.todos'));
    this.requestedCheckbox = function(check){
    		element.all(by.repeater('todoList.todos')).filter(function(el){
			 return el.element(by.tagName('span')).getText().then(function(text) {	
				 return text == check;
			 });
		 });
    };   
    
    //Wire up a Backend
    this.projectSearch = element(by.model('projectList.search'));
	this.allProject = element.all(by.repeater('project in projectList.projects'));
    this.projectEdit =  function(project){
    	browser.wait(this.inDom(this.projectSearch), this.timeout.l);
    	this.enterTextNewly(this.projectSearch, project);
    	return this.allProject.first().all(by.tagName('a')).get(1);
    };
    this.projectDescriptionEdit = element(by.model('editProject.project.description'));
    this.projectSubmit = element(by.css('[ng-click="editProject.save()"]'));
    this.projectDescription =  function(project){
    	browser.wait(this.inDom(this.projectSearch), this.timeout.l);
    	this.enterTextNewly(this.projectSearch, project);
    	return this.allProject.first().element(by.xpath('./td[2]'));
    };
	 
    /**
     * Add Name in Name field
     * 
     * @param  {name} string 
     */
   
    this.addName = function(name){
    	this.enterTextNewly(this.Name, name);
    };
    
    this.verifyDisplayName = function(displayname){
    	expect(this.DisplayName.getText()).to.eventually.equal(displayname);
    };
    
    this.enterProject = function(project){
    	this.enterTextNewly(this.projectSearch, project); 
    };
    
    /**
     * Search the given project and verify the count
     * 
     * @param  {string} project, {int} count 
     */
    this.verifyProjectCount = function(count){  
    	 expect(this.allProject.count()).to.eventually.equal(count);    	
    };
    
    this.projectEdit = function(project){
    	browser.wait(this.inDom(this.projectSearch), this.timeout.l);
    	this.enterTextNewly(this.projectSearch, project);
    	this.clickElement(this.allProject.first().all(by.tagName('a')).get(1));
    };
    
    this.editDescription = function(description){
    	this.enterTextNewly(this.projectDescriptionEdit, description);  
    };
    
    /**
     * Edit the project and verify it on main page
     * 
     * @param  {string} project, {string} description 
     */
    this.verifyProjectDescription = function(project,description){ 
    	expect(this.projectDescription(project).getText()).to.eventually.equal(description);
    };
    
    

};

AngulJsPage.prototype = basePage; // extend basePage...
module.exports = new AngulJsPage();