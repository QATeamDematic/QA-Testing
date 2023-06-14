@foo
Feature: Delete an existed site

  Scenario Outline: Delete an existed site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And hover on desired existed sites
    Then click on the delete or bin icon
    Then click on the Yes button to delete the site