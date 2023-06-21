@foo
Feature: Deployment Home Page

  Scenario Outline: Checking all the features present on the Deployment Page

    Given user navigates to Deployer application
    When user login to Deployer application with valid credentials
    And Click on Deployment icon from the side menu bar of the page
    Then user click on Create Site button
    Then user enter Site Name
    And select Environment Type from the dropdown
    Then clicks add button
    And user will get success message
    And user could see the new site name on the deployment page
    Then user will hover on the desired site to Edit or Delete the Site
    And user click on the edit icon
    And edit the site name or the Environment type
    Then click on Save
    And user will get a success message
    Then user click on delete icon
    And click on Yes button to delete the site
    Then user will get a success message
    Then click on Filter Sites textbox to check if a site is present
    And type desired site name there
    And user will see the highlighted sites if site is present in the list
    And if the site is not present the user will get Filter has no matching results message
    And user can select the items per page from the dropdown present at bottom right of the page
    And user can also move to next page or previous page by clicking on arrows present at bottom right of the page