@foo
Feature: Abort of a deploying site

  Scenario Outline: Abort of an ongoing deployment site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on available site
    And click on Software button
    Then select Available from the select a view dropdown
    Then click on Abort button of the ongoing deployment software