@foo
Feature: Edit an existed site

  Scenario Outline: Edit an existed site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And hover on desired existed sites
    Then click on the pen icon or edit
    And edit the site name or environment type
    Then click on the save button