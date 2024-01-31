Feature: Organization List
  Background:
    Given the user is on the Identity login page
    When the user enters a username
    Then the user enters a password
    Then the user clicks on the Sign In button

  Scenario: Check created organization
    Then click on the organization tab
