@foo
Feature: View the history of the deployments

  Scenario Outline: Viewing the history Deployment of the softwares

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on an available site
    And click on Software button
    Then select History option from the select a view dropdown
    And user can see the software deployment list
    Then user click on view logs
    And user can see the log for that particular software
    Then user can download the logs in .txt format by clicking on Export button