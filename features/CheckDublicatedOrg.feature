Feature: Identity Main Page

  Background:
    Given the user is on the Identity login page
    When the user enters a username
    Then the user enters a password
    Then the user clicks on the Sign In button

  Scenario: Viewing Identity Page Details
    Then opens a new tab
    Then selects the New Organization menu option
    Then enters the organization name into the field
    Then specifies the parent organization
    Then clicks on the Done button