@foo
Feature: Login

  Scenario: Login to the KION application

    Given user navigates to KION application
    When user login to KION application with valid credentials
    Then user see the homepage
