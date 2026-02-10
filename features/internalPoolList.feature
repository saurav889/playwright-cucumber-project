Feature:Internal pool functionality
  Scenario: Internal pool list invite functionality
    When the user navigate to the "Internal Pool List" page
    And the user click on invite new user icon button
    And the user enter the "<First_Name>" "<Last Name>" "<Email>" "<Mobile_Number>" in the respective fields
    And the user select the "<locum_Type>" from dropdown
    And the user selects the "<Employee_Type>" from dropdown
    And the user click on "Save" button

    Examples: 
      | First_Name | Last Name | Email                         | Mobile_Number | locum_Type          | Employee_Type |
      | Simanta    | Das       | simanta+das@aerion.com.au     | 0412345678    | Internal Employee   | Nurse         |

  Scenario: Internal pool list invite functionality
    When the user navigate to the "Internal Pool List" page
    And the user click on internal pool user icon button
    And the user selected "<Tag>" from dropdown
    And the users selected "<Type>" from dropdown
    And the user enter "<Search_By_Name>" in the input field
    And the user click on "Filter" button
    Then the user verfy "<Search_By_Name>" "<Type>"

    Examples: 
      |Tag|| Type       | Search_By_Name         |
      |NSW|| Contractor | Daniel Kar Meng Kong   |