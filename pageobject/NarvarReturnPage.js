var basePage = require('../pageobject/basePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var NarvarReturnPage = function() {
	this.url = 'https://returns-qa01.narvar.qa/madewell/returns/step-1?order=625541425027&bzip=12539&init=true';
	this.pageLoaded = this.inDom(element(by.xpath('//h2[contains(text(),"What would you like to return?")]')));
	this.allOrders = element.all(by.repeater('item in items track by $index'));
	this.firstOrderSelect = allOrder.first().$('.clearfix');
	this.returnQuantity = $('.sidebar-return-qty');	
	
	this.returnFirstOrder = function(reason){
		this.clickElement(this.firstOrderSelect); 		
		
		$$(".menu-btn").filter(function(ele){
			return ele.getText().then(funtion(text)){
				return text.includes(reason);
			}
		}).then(function(el){
			this.clickElement(el);
		});
		
		
	
	}
}

NarvarReturnPage.prototype = basePage; // extend basePage...
module.exports = new NarvarReturnPage();
