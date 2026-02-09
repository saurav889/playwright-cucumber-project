Feature: Employer functionality
  Scenario: Verify Employer filter with valid credentials
    When the user navigate to the "Employers" page
    And the user enter the "<Employer Name>" in the text box
    And the user click on filter button
    Then the user should see the filtered results "<Alias>" "<Employer Name>" "<Email>" "<Subscription>"
    Examples:
      | Alias | Employer Name                  | Email                                               | Subscription |
      | P859  | Carnes Hill Priceline Pharmacy | jems+carnes-hill-priceline-pharmacy50@aerion.com.au | active       |

  Scenario: cretae a new employer with valid credentials
    When the user navigate to the "Employers" page
    And the user click on "Create Employer" button
    And the users enters details "<Pharmacy Name>" "<Email>" "<Phone>" "<Address>" "<Billing Address>" "<ABN>" in the text box
    And the users selects "<Average scripts per day>" from dropdown
    And the users select "<Dispensing software>" from dropdown
    And finally user select "<Services>" from dropdown
    And the user click on "Save" button
    Examples:
      | Pharmacy Name                  | Email                                               | Phone      | Address         | Billing Address    | ABN         | Average scripts per day | Dispensing software | Services    |
      | Carnes Hill Priceline Pharmacy | jems+carnes-hill-priceline-pharmacy50@aerion.com.au | 0412345678 | 123 Main Street | 456 Another Street | 12345678901 | 50-100                  | LOTS                | Compounding |


  Scenario: Validation for mandatory fields while adding new employer
    When the user navigate to the "Employers" page
    And the user click on "Create Employer" button
    And the user click on "Save" button
    Then the user should see an error messages "The Pharmacy Name is required" "The Email is required" "The Phone is required" "The ABN is required" "The Scripts per day is required" "The Dispensing Software is required" "The Pharmacy Services is required"