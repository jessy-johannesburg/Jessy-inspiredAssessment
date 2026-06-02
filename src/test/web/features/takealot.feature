@takealot
Feature: takealot Registration

Scenario: Register a new user on takealot
 Given I am on the takealot landing page
 When I click on the Register button
 Then I should be navigated to the register page
 When I fill in the registration form with valid details
#  Then I should see a confirmation message indicating successful registration