Feature: To Check and Verify the Test Execution Functionality

  @visit
  Scenario: Verify dashboard
    Given visit application and Login
    Then user clicks on copy json of "AUT_LOG_001"
    Then user lands on "Dashboard Activities" page

  @visitFailed
  Scenario: Verify dashboard
    Given visit application and Login
    Then user clicks on copy json of "AUT_DASH_001"
    Then user lands on "Test Case Execution" page
