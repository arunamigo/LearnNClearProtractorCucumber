var basePage = require('../pageobject/basePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var NarvarReturn = function() {
	this.url = 'https://returns-qa01.narvar.qa/madewell/returns';
    this.pageLoaded = this.inDom(element(by.xpath('//h2[text()="Returns"]')));
    this.orderNumber = element(by.xpath('//*[@placeholder = "Order Number"]');	
    this.zipCode = element(by.xpath('//*[@placeholder = "Order Number"]'));
    this.nextButton = element(by.xpath('//button[contains(.,"NEXT")]'));
    
    this.openOrder = function(orderNo, zipNo){
    	this.enterTextNewly(this.orderNumber, orderNo);
    	this.enterTextNewly(this.zipCode, zipNo);
    	this.clickElement(this.nextButton);    	
    };
    
};

NarvarReturn.prototype = basePage; // extend basePage...
module.exports = new NarvarReturn();


