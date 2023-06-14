@foo
Feature: Create new site

  Scenario Outline: Create a new site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on Create Site button
    Then user put Site Name
    And user select Environment Type from the dropdown
    Then user click add button