@foo
Feature: Deployment of an available site

  Scenario Outline: Deployment of an available site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on an available site
    And click on Software button
    Then select Available option from the select a view dropdown
    Then click on Deploy button of the desired Software
    And user can see the Software Deploying message
    And user can see the progress of the deployment by the view activity log
    Then user get an message of software deployed after successfully completion of deployment