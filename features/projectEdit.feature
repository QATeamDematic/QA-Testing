@foo
Feature: Edit an existed project associated with site

  Scenario Outline: Edit an existed project associated with site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Project
    And hover on desired existed projects
    Then click on the pen icon or edit
    And edit the desired fields
    Then click on the save button