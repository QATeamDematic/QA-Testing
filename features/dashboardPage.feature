@foo
Feature: Dashboard Page

  Scenario Outline: Checking all the features present on the Dashboard

    Given user navigates to Deployer application
    When user login to Deployer application with valid credentials
    When user click on the my profile icon present at the top right of the page
    And user can see all the permissions given
    And user can logout from the deployer application
    And user changes the password by clicking on the Change password button
    Then user enter the current password
    And enter the new password
    And enter the new password again to confirm the password
    Then click on update password button