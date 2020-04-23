Feature: Business rules
  In order to do a search
  As a user
  I want to be able to fill a field and submit

  Scenario: Search opposite of puppies
    Given I want to see what the opposite of puppies is
    When I search for "opposite of puppies" in Google
    Then I should see puppies
