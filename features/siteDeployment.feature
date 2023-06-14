@foo
Feature: Deployment of an available site

  Scenario Outline: Deployment of an available site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on available site
    And click on Software button
    Then select Available from the select a view dropdown
    Then click on Deploy button of the desired Software