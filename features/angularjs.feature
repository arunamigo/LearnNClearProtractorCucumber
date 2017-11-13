Feature: Test Angular Js application
	
	Background:
		Given I go to "https://angularjs.org/"

    Scenario: Should add name as Vinoth
        When I add "Vinoth" in the Name textbox
        Then I should see "Hello Vinoth!" in Display
	
	Scenario: Filter should work correctly
		When I search "Angular" in JavaScript Projects
		Then I should see 2 in project search list
		
	Scenario: Filter edit should work correctly
		When I search "AngularJS" and click edit in JavaScript Projects
		Then Edit description as "AngularJS Description"
		And Click Submit
		Then Project "AngularJS" description should display "AngularJS Description" in JavaScript Projects