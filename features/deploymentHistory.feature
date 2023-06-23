@foo
Feature: View the history of the deployments

  Scenario: Viewing the history Deployment of the softwares

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on an available site
    Then click on Software button
    Then click on the select a view dropdown
    And select History option from the select a view dropdown
    And user can see the software deployment list
    Then user click on view logs
    And user can see the log for that particular software
    Then user can download the logs in .txt format by clicking on Export button
