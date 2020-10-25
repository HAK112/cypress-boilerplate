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
    
