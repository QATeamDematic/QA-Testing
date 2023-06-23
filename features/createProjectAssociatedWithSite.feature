@foo
Feature: Create new project associated with Site

  Scenario: Create a new project associated with Site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Project
    And user click on Create Project button
    Then user put Project Name
    And user put Customer, Solution
    Then user put Site Name from the dropdown
    And put Project Manager, Project Number and Commissioning Date
    Then user click the add button
    And user will get a success message