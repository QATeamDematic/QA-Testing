@foo
Feature: View the activity log

  Scenario Outline: Viewing the activity log for Deployment of a software

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on available site
    And click on Software button
    Then select Available from the select a view dropdown
    And click on Deploy button of the desired Software
    Then click on View Activity button