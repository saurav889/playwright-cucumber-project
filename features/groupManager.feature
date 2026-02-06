Feature: Group Manager filter functionality
  Scenario: Verify Group Manager filter with valid credentials
    When the user navigate to the "Group Manager" page
    And the user enter the "<name>" in the text box
    And the user click on filter button
    Then the user should see the filtered results "<name>" "<email>" "<group_manager>" "<#_Of_pharmacies>" "<pharmacy_tags>"

  Examples:
    | name    | email                         | group_manager   | #_Of_pharmacies | pharmacy_tags  |
    | mgr-001 | simanta+mgr-001@aerion.com.au | Group Manager   | 1               | Gold Coast     |


  Scenario: Add Group Manager with valid credentials
    When the user navigate to the "Group Manager" page
    And the user click on "Add Group Manager" button
    And the user enter details "<name>" "<email>" "<phone_number>" in the text box
    And the user select "<pharmacy_tags>" from dropdown
    And the user selects "<send_notification>" from dropdown
    And the user select permissions "Create Pharmacy", "Edit Pharmacy", "Delete Pharmacy"
    Then the user click on "Save" button

  Examples:
    | name    | email                          | phone_number |pharmacy_tags  | send_notification |
    | mgr-002 | simanta+mgr-0023@aerion.com.au | 0412345678   |Gold Coast     | Yes               |

  Scenario: Validation for mandatory fields while adding Group Manager
    When the user navigate to the "Group Manager" page
    And the user click on "Add Group Manager" button
    And the user details "<name>" "<email>" "<phone_number>" "<send_notification>" are empty in the text box
    And the user click on "Save" button
    Then the user should see error message "The Name is required", "The Email is required", "The Phone Number is required", "The Send Notification is required"

  Scenario: Bulk remove pharmacy tags to Group Manager
    When the user navigate to the "Group Manager" page
    And the user select respective checkbox to remove for group manager
    And the user click on "Bulk Remove Pharmacy Tags For" button
    And the user click on "Save" button
    Then the user should see "Success" message

  Scenario: Bulk assign pharmacy tags to Group Manager
    When the user navigate to the "Group Manager" page
    And the user select respective checkbox to remove for group manager
    And the user click on "Bulk assign pharmacy tags for" button
    And the user click on "Save" button
    Then the user should see "Success" message
  