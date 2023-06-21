@foo
Feature: Abort of a deploying site

  Scenario Outline: Abort of an ongoing deployment site

    Given user on the login page of Deployer
    When user login to Deployer application with valid credentials
    Then user click on Deployment
    And user click on an available site
    And click on Software button
    Then select Available option from the select a view dropdown
    Then click on Deploy button of the desired Software
    And user can see the Software Deploying message
    And the abort button will be enabled on the page
    Then click on Abort button
    And user can see the message of software aborting
    Then user can see the progress of the deployment by the view activity log
