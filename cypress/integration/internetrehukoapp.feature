Feature: Navigate to Internetrehuko App page 

  Scenario: Click on Checkboxs

    Given I am on Internet rehuhoapppage
    Then I click on "Checkboxes"
    And validate checkbox is checked
    And click on checkbox


  Scenario: Click on Contextmenu

    Given I am on Internet rehuhoapppage
    Then I click on "Context Menu"
    And Right Click and validate the alert


   @loginnonadmin
  Scenario Outline: Click on Form Authentication

    Given I am on Internet rehuhoapppage
    Then I click on "Form Authentication"
    And Enter Username "<credentials>"
    And Enter password "<credentials>"
    And Click on Submit button

    Examples:
      | credentials  |
      | nonadmin     |

  @loginadmin
  Scenario Outline: Click on Form Authentication

    Given I am on Internet rehuhoapppage
    Then I click on "Form Authentication"
    And Enter Username "<credentials>"
    And Enter password "<credentials>"
    And Click on Submit button

    Examples:
      | credentials  |
      |    admin     |

   @newtab
  Scenario: Click on Multiple Windows

    Given I am on Internet rehuhoapppage
    Then I click on "Multiple Windows"
    And Open in new tab


  @dragdrop
  Scenario: Drag and Drop

    Given I am on Internet rehuhoapppage
    Then I click on "Drag and Drop"
    And Drag Ablock to Bblock

    
