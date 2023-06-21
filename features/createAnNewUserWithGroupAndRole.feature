@foo
Feature: Create an user with group and role

  Scenario Outline: Create an user with group and role

    Given user navigates to Deployer application
    When user login to Deployer application with valid credentials
    When user click on toggle menu
    And user click on User Management
    And user click on create new user
    Then assign UserGroups and Roles along with the email address and password
    And click on Click button
    Then user see the new user
