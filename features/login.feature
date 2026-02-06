Feature: Login functionality
  Scenario: Login With valid credentials
    Given I open the "/" page
    When the user enter the "<Username>" and "<Password>"
    And the user click on the " Sign In " button
    Then the user should be redirected to the dashboard page

  Examples:
    | Username        | Password  |
    | ak@gmail.com    | password  |

  Scenario: Login With invalid credentials
    Given I open the "/" page
    When the user enter the "<Username>" and "<Password>"
    And the user click on the " Sign In " button
    Then "TypeError: Failed to fetch" message should be displayed

  Examples:
    | Username       | Password |
    | a@gmail.com    | passwor  |
  
  Scenario: Logout functionality
    Given I open the "/" page
    When the user enter the "<Username>" and "<Password>"
    And the user click on the "Sign In" button
    And the user click on the avatar button
    Then the user click on the "Logout" button

    Examples:
    | Username        | Password  |
    | ak@gmail.com    | password  |