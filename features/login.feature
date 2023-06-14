@foo
Feature: Login to Deployer

  Scenario: Login to the Deployer application

    Given user navigates to Deployer application
    When user login to Deployer application with valid credentials
    Then user see the homepage
