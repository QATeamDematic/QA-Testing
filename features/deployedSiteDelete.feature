@foo
Feature: Deletion of a deployed site

  Scenario Outline: Delete a deployed site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on available site
    And click on Software button
    Then select Deployed from the select a view dropdown
    Then click on Delete button