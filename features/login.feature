Feature: Login functionality
  Scenario: Login with valid credentials
    Given I open the login page
    When I enter valid credentials
    And I click the "Sign In" button
    Then I should be redirected to the dashboard page

  Scenario: Login with invalid credentials
    Given I open the login page
    When I enter invalid credentials
    And I click the "Sign In" button
    Then I should see an error message
  
  Scenario: Logout functionality
    Given I open the login page
    When I enter valid credentials
    And I click the "Sign In" button
    And the user click on the avatar button
    Then the user click on the "Logout" button

    Examples:
    | Username        | Password  |
    | ak@gmail.com    | password  |