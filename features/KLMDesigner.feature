Feature: Navigate and load json file

  Scenario: Navigate to the KLM Designer page

    Given user navigates to the KLM Designer page
    When user click on the load file button
    Then the file is loaded into the application
