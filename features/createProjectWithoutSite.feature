@foo
Feature: Create new project associated with Site

  Scenario: Create a new project associated with Site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Project
    And user click on Create Project button
    Then User put Project Name
    And User put Customer, Solution
    Then Put Project Manager, Project Number and Commissioning Date
    Then user click add button