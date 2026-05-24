@userApi
Feature: User API Validation

  Scenario: Retrieve user data and extract details
    Given I retrieve user details for user id 2
    Then the response status should be 200
    And I should extract the first name from the response
    And I should extract the support URL from the response


  Scenario: Update email and delete last name
    Given I update user email for user id 2
    Then the update response status should be 200
    And the email should be updated successfully
    When I delete the last name for user id 2
    Then the delete response status should be 200
    And the last name should be null
	
	
	
	