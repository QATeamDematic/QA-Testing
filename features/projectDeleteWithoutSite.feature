@foo
Feature: Delete an existed project not associated with Site

  Scenario Outline:  Delete an existed project not associated with Site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Project
    And hover on desired existed projects which are not associated with sites
    Then click on the delete or bin icon
    Then click on the Yes button to delete the project