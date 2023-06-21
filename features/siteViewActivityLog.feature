@foo
Feature: View the activity log

  Scenario Outline: Viewing the activity log for Deployment of a software

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on an available site
    And click on Software button
    Then select Available option from the select a view dropdown
    And click on Deploy button of the desired Software
    Then click on View Activity button
    And user can see the progress of the deployment/abortion along with the logs