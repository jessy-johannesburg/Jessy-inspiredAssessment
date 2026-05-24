@buyCheapComputer
Feature: Shopping cart - buy own cheap computer


Scenario: Purchase a desktop computer with cod payment
 Given I am on the demo webshop login page
 When I click on Login button
 When I login with valid credentials
 When I select computers menu 
 And I click on desktop category
 Then I should be navigated to desktop category page
 When I select the cheapest product and add it to cart
 Then the product should be added to cart successfully
 When I accept terms and conditions and proceed to checkout
 Then I should be navigated to checkout page
 When I select cod payment method and confirm the order 
 Then I should capture the order number 



