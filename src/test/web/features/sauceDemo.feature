@sauceDemo
Feature: sauce Demo Login successfully


Scenario: Verify successful login
Given I am on Sauce Demo Login page
When I enter username and password
Then I click on Login btn
Then I should be navigating to homePage