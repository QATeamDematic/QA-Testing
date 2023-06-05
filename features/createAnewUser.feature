@foo
Feature: Create new user

  Scenario Outline: Create a new user

    Given user navigates to KION application
    When user login to KION application with valid credentials
    When user click on toggle menu
    And user click on User Management
    And user creates a new user
    Then user see the new user


